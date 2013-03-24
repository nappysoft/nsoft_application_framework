function BaseObject (iSerial) {
    var that = this,
        serial = (typeof iSerial !== undefined) ? iSerial : -1,
        type = 'baseobject',
        name = '',

        x = 0, y = 0, z = 0,

        width = 1,height = 1,

        mass = 0,
        speed = 0,
        direction = 0,
        vx = 0, vy = 0,

        state = {
            movable: true,
            solid: true,
            alive: true,
            visible: true
        },

        sprite = {
            offsetX:0,offsetY:0,
            currentFrame:0,
            frameRate:1,
            frames:[]
            // {offsetX,offsetY,width,height}
        };

    var onCollide = function (object,ref) {};
    var onStep = function (start,time,timeDelta) {};
    var onDie = function () {};

    // interface
    this.serial = serial;
    this.type = type;
    this.name = name;
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.mass = mass;
    this.speed = speed;
    this.direction = direction;
    this.vx = vx;
    this.vy = vy;
    this.state = state;
    this.sprite = sprite;
    this.onCollide = onCollide;
    this.onStep = onStep;
    this.onDie = onDie;

};
BaseObject.prototype.appendType = function (sType) {
    this.type += '.' + sType;
};

BaseObject.prototype.getBounds = function () {
   return {
     x: this.x - this.width * 0.5,
     y: this.y - this.width * 0.5,
     width: this.width,
     height: this.height
   };
};
BaseObject.prototype.collide = function (object,ref) {
    if (typeof this.onCollide === 'function') {
        this.onCollide(object,ref);
    }
};
BaseObject.prototype.step = function (start,time,timeDelta) {
    if (typeof this.onStep === 'function') {
        this.onStep(start,time,timeDelta);
    }
};
BaseObject.prototype.die = function () {
    if (typeof this.onDie === 'function') {
        this.onDie();
    }
};


var particleObject = function(oBaseObject) {
    var obj = oBaseObject;
    obj.appendType('particle');
    obj.parent = obj;
    obj.born = 0;
    obj.life = 0;
    obj.decay = 0;
    obj.direction = 0;
    obj.speed = 0;

    return obj;
};

var emmiterObject = function(oBaseObject) {
    var obj = oBaseObject;
    obj.appendType('emmiter');
    obj.particles = [];
    obj.repeat = 0;
    obj.particleMass = 1;
    obj.particleSpeed = 1;
    obj.particleDirection = 0;
    obj.particleDecay = 0;

    return obj;
};

var rockObject = function(oBaseObject) {
    var obj = oBaseObject;
    obj.appendType('rock');


    return obj;
};

var bulletObject = function(oParticleObject) {
    var obj = oParticleObject;
    obj.appendType('bullet');

    return obj;
}

var shipObject = function (oBaseObject) {
    var obj = oBaseObject;
    obj.appendType('ship');

    obj.weapons = [];

    return obj;
};

var weaponObject = function (oEmmiterObject) {
    var obj = oEmmiterObject;
    obj.appendType('weapon');

    obj.power = 0;
    obj.range = 0;
    obj.weaponClass = 'None';

    obj.fire = function (shipObject) {
        var bullets = [];
        var bullet = bulletObject(particleObject(new BaseObject));

        bullet.parent = this;
        bullet.born = 0;
        bullet.life = -1;
        bullet.speed = this.particleSpeed;
        bullet.mass = this.particleMass;
        bullet.sprite = this.sprite

        bullets.push(bullet);

        return bullets;
    };

    return obj;
};

var app = (function () {
    var mouse,keyboard,serials,
        canvas,context,
        buffer,bufferContext,
        center = {x:0,y:0,z:0},
        rafID, firstTime = 0,lastTime = 0, tickDelay = 1000 / 33,
        player = [],bullets = [], rocks = [],level = [],
        objectList = [],
        obl = objectList,
        graphics,
        weapons = {},
        uiSections = {},
        renderStack = [],
        scores = {'player1':{
                rocks:0
            }
        };

    objectList.removeObject = function (obj) {
        var that = this;
        for (index in that) {
                if (that[index].serial === obj.serial) {
                    that.splice(index,1);
                    break;
                }
            }
    };


    //----
    var new_object = function(aList,sName) {
        var serial = serials.next,
            obj = new BaseObject(serial);

        obj.name = sName || (obj.name + '.'+serial);

        aList.push(obj);

        return obj;
    };

    var new_rect = function (x,y,width,height) {
        return {
            x: x, left: x,
            y: y, top: y,
            width: width, right: x + width,
            height: height, bottom: y + height
        };
    };

    var draw = function draw (time) {
        var ctx = bufferContext,
            ctxH = buffer.height,
            ctxW = buffer.width,
            cx = ctxW * 0.5,
            cy = ctxH * 0.5;

        ctx.clearRect(0,0,ctxW,ctxW);

        ctx.fillStyle = 'rgba(0,0,0,1.0)';
        ctx.fillRect(0,0,ctxW,ctxH);
        ctx.save();

        objectList.filter(function (obj) {
            return utils.intersects({x: 0,y: 0,width: ctxW,height: ctxH},obj.getBounds());
            }).forEach( function (obj) {
            var sprite = obj.sprite,
                currentFrame = sprite.currentFrame,
                frames = sprite.frames;

            //if (obj.type === 'baseobject.rock' ||
            //    obj.type === 'baseobject.ship' ||
            //    obj.type === 'baseobject.particle.bullet') {
            if (['baseobject.rock','baseobject.ship','baseobject.particle.bullet'].indexOf(obj.type) >= 0){
                ctx.drawImage(graphics,
                                  sprite.offsetX+frames[currentFrame].offsetX,
                                  sprite.offsetY+frames[currentFrame].offsetY,
                                  frames[currentFrame].offsetX + frames[currentFrame].width,
                                  frames[currentFrame].offsetY + frames[currentFrame].height,
                                  obj.x-obj.width*0.5,obj.y-obj.height*0.5,
                                  obj.width,obj.height);
            }
        });
        ctx.restore();
        ctx.fillStyle = 'rgba(255,0,0,1.0)';
        //ctx.fillText(time,10,10);
        ctx.fillText('objects: '+rocks.length,10,25);
        

        context.drawImage(buffer,0,0);
    };

    var hitTest = function (objA,objB) {
        if (objA.type !== objB.type) {
            return utils.intersects(objA.getBounds(),objB.getBounds());
        } else {return false;}
    };

    var padRect = function(oRect,padding) {
        return {

            x: oRect.x - padding,
            y: oRect.y - padding,
            width: oRect.width + padding,
            height: oRect.height + padding

        };
    }

    var filterArray = function (aArray,oFilter) {

        return aArray.filter(function (obj,index) {
                var found = true,
                    prop;

                // run through the filter properties
                for (prop in oFilter) {
                    // is one of the filter properties in the array
                    if (prop in obj) {
                        found = true && oFilter[prop](obj[prop]);
                    } else {found = false;}

                    if (false === found) {return false;}
                }
                return found;
            });
    };

    var stepGame = function (time) {
        var dt = time - lastTime,
            collisions = [],
            playField,
            stepStack = new Array().concat(player,bullets,rocks);
        // checkBounds
        stepStack.forEach( function (obj, index, srcArray) {
            if (!utils.intersects(uiSections['playField'],obj.getBounds())) {
               switch (obj.type) {
                    case 'baseobject.rock':
                        if (obj.y > canvas.height) {
                            objectList.removeObject(obj);
                            for (var rindex = rocks.length - 1; rindex >= 0; rindex--) {
                                if (rocks[rindex].serial === obj.serial) {
                                    rocks.splice(rindex,1);
                                }
                            };
                        }
                        break;
                    case 'baseobject.particle.bullet':
                        objectList.removeObject(obj);
                        break;
                    case 'baseobject.ship':
                        obj.x = (obj.x < 0) ? 0 : obj.x > canvas.width ? canvas.width : obj.x;
                        break;
                    default:
                        break;
               }


            }
            playField = objectList.filter(function(obj) {
                if(utils.intersects(uiSections['playField'],obj.getBounds())) {
                    return true;
                } else {return false;}
            });

            playField.forEach (function (obj,index,oArray) {
                var sub = index + 1;
                for (sub; sub < oArray.length; sub += 1) {
                   if (hitTest(obj,oArray[sub])) {
                        if (obj.type === 'baseobject.rock') {
                            collisions.push([obj,oArray[sub]]);
                        }
                    }
                }
            });

            collisions.forEach ( function (collision,index) {
                    objectList.removeObject(collision[0]);
                    objectList.removeObject(collision[1]);
            });

            if (obj.state.alive) {
                if (obj.state.movable) {
                    obj.x += obj.vx * obj.speed;
                    obj.y += obj.vy * obj.speed;
                }
                obj.step(firstTime,time,dt);
            }

        });



        if (rocks.length <= 30) {
            create_rocks();
        }
        // processCollisions

        // cleanUp

        lastTime = time;
    };

    var create_ship = function () {
        var obj = shipObject(new_object(objectList));
        obj.x = center.x;
        obj.y = canvas.height - 26;
        obj.width = 40;
        obj.height = 40;
        obj.vx = 1;
        obj.vy = 0;

        obj.sprite.offsetX = 1;
        obj.sprite.offsetY = 1 * 64;
        obj.sprite.frames.push({
            offsetX: 0,
            offsetY: 0,
            width: 64,
            height: 64
        });

        obj.weapons.push(weapons['default']);

        player.push(obj);
    };

    var create_rocks = function () {
        var fieldLen = canvas.height, // look at doing this on a timeline
            fieldWidth = canvas.width, // maybe this should be done on a grid.
            fields = 4,
            speedMin = 1,speedMax = 3,
            direction = 90,
            sizeMin = 24, sizeMax = 32,
            numRocks = rocks.length + 100 < 130 ? 100 : 130;

        for (var i = 0; i < 100; i += 1) {
            var obj = rockObject(new_object(objectList));
            obj.width = obj.height = sizeMin + Math.random() * sizeMax;
            obj.y = -(Math.random() * fieldLen * fields);
            obj.x = Math.random() * fieldWidth;
            obj.speed = speedMin + (Math.random() * speedMax);
            obj.direction = direction;
            obj.vx = 0;
            obj.vy = 1;

            obj.sprite.offsetX = 1;
            obj.sprite.offsetY = 1;
            obj.sprite.frames.push({
                offsetX: 0,
                offsetY: 0,
                width: 64,
                height: 64
            });

            rocks.push(obj);
        };
    };

    var load_weapons = function() {
        var obj = weaponObject(emmiterObject(new_object(objectList)));
        obj.particleDirection = utils.degToRad(90*3);
        obj.particleSpeed = 8;
        obj.particleMass = 4;
        obj.particleDecay = 10;
        obj.particleLife = 40;

        obj.sprite.offsetX = 1;
        obj.sprite.offsetY = 2 * 64;
        obj.sprite.frames.push({
            offsetX: 0,
            offsetY: 0,
            width: 16,
            height: 16
        });

        weapons['default'] = obj;
    };
    //--------------
    var fire_weapon = function (player) {
        player.weapons.forEach( function (obj) {
            var particles = obj.fire(player);

            particles.forEach(function (particle) {
                particle.serial = serials.next;
                particle.direction += Math.PI * 1.5;
                particle.x = player.x;
                particle.y = player.y;
                particle.vx = Math.cos(particle.direction);
                particle.vy = Math.sin(particle.direction);
                particle.width = 8;
                particle.height = 8;
                objectList.push(particle);
                bullets.push(particle);
            });

        });
    };
    //--------------
    var setup_userInterface = function (){

        uiSections = {
            'playField': new_rect(0,0,canvas.width,canvas.height)

        };
    }

    var create_game_objects = function (){
        load_weapons();

        create_ship();

        create_rocks();

        };
    var initialize_game = function (){
           window.addEventListener("keydown",function (e) {
            switch (e.keyCode) {
                case keycode.LEFT:
                    player[0].speed = -6;
                    break;
                case keycode.RIGHT:
                    player[0].speed = 6;
                    break;
                case keycode.SPACE:
                    fire_weapon(player[0]);
                    break;
                default:
                    break;
            }

        },false);
        window.addEventListener("keyup",function (e) {
            if(e.keyCode === keycode.LEFT || e.keyCode === keycode.RIGHT) {
                player[0].speed = 0;
            }
        },false);

          (function animTimer (time) {
            cancelAnimationFrame(rafID);
            
            //if (time - lastTime <= tickDelay) {return;}
            if (time - lastTime >= tickDelay) {
                stepGame(time);
            }
            
            draw(time);

            rafID = requestAnimationFrame(animTimer);

          }());
    };
    //--------------


    var load = function load (applicationObj) {
        
        serials = NSOFT.serialnumbers;

        canvas = applicationObj.objects.canvas;
        context = canvas.getContext("2d");

        buffer = applicationObj.objects.buffer;
        bufferContext = buffer.getContext('2d');

        center.x = canvas.width * 0.5;
        center.y = canvas.height * 0.5;
        //mouse = mouseBondage(canvas); //utils.mouseBondage(canvas);
        graphics = new Image();
        graphics.src = "./img/space-destroyer-objects.png";

        tickDelay = 1000 / (canvas.height *0.1);
        setup_userInterface();
        create_game_objects();
        initialize_game();

    };

    return {
        load: load
    };

}());