/* utils.js */
"use strict";

var utils = {};
utils.RAD = (Math.PI / 180);
utils.DEG = (180 / Math.PI);

utils.degToRad = function degToRad (n) {return n * utils.RAD;};
utils.radToDeg = function radToDeg (n) {return n * utils.DEG;};
/**
 * Determine if a rectangle contains the coordinates (x,y) within it's boundaries.
 * @param {object}  rect  Object with properties: x, y, width, height.
 * @param {number}  x     Coordinate position x.
 * @param {number}  y     Coordinate position y.
 * @return {boolean}
 */
utils.containsPoint = function (rect, x, y) {
  return !(x < rect.x ||
           x > rect.x + rect.width ||
           y < rect.y ||
           y > rect.y + rect.height);
};

/**
 * Determine if two rectangles overlap.
 * @param {object}  rectA Object with properties: x, y, width, height.
 * @param {object}  rectB Object with properties: x, y, width, height.
 * @return {boolean}
 */
utils.intersects = function (rectA, rectB) {
  return !(rectA.x + rectA.width < rectB.x ||
           rectB.x + rectB.width < rectA.x ||
           rectA.y + rectA.height < rectB.y ||
           rectB.y + rectB.height < rectA.y);
};

utils.SerialNumbers = function (next,step) {
    var serialNumber = next || -1,
        numberStep = step || 1;

    var setNext = function (n) {
        if ((n) > serialNumber) {
            serialNumber = n;
        }
    };

    var setStep = function (n) {
        if (n >= 0) {
            numberStep = n;
        }
    };

    var getNext = function () {
        serialNumber += numberStep;
        return serialNumber;
    };

    var getStep = function () {
        return numberStep;
    };

    return {
        setNext: setNext,
        setStep: setStep,
        getNext: getNext,
        getStep: getStep
    };
};

// Mouse bondage
utils.mouseBondage = function (element) {
    var mouse = {x:0,y:0,oldX:0,oldY:0,
                isDown: false,
                buttons: {}
                },
        target;

    var mouseMove = function mouseMove (e) {
        var x, y,
            docBody = document.body,
            docElement = document.documentElement;

        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + docBody.scrollLeft + docElement.scrollLeft;
            y = e.clientY + docBody.scrollTop + docElement.documentElement.scrollTop;
        }
        x -= target.offsetLeft;
        y -= target.offsetTop;

        mouse.oldX = mouse.x;
        mouse.oldY = mouse.y;

        mouse.x = x;
        mouse.y = y;
    };
    var mouseDown = function mouseDown (e) {
        mouse.isDown = true;
        if (! mouse.buttons.hasOwnProperty(e.button)) {
            mouse.buttons[e.button] = true;
        }
        mouse.oldX = mouse.x;
        mouse.oldY = mouse.y;
    };
    var mouseUp = function mouseUp (e) {
        if (mouse.buttons.hasOwnProperty(e.button)) {
            delete mouse.buttons[e.button];
        }
        if (buttons.length === 0) {
            mouse.isDown = false;
        }
        mouse.oldX = mouse.x;
        mouse.oldY = mouse.y;
    };


    if (typeof element === 'object' && typeof element.addEventListener === 'function') {
        target = element;
    } else {target = window;}

    target.addEventListener("mousemove",mouseMove,false);

    return mouse;
};

// keyboard bondage
utils.keyboardBondage = function (element) {
    var keyboard = {},
        events = {},
        target;

    var keyDown = function keyDown (key) {
        keyboard[key] = true;
        triggerEvent(key,"keydown");
    };

    var keyUp = function keyUp (key) {
        if (key in keyboard) {
            delete keyboard[key];
            triggerEvent(key,"keypress");
        };
        triggerEvent(key,"keyup");
    };

    var triggerEvent = function triggerEvent (keyCode,event) {
        if (events.hasOwnProperty(keyCode)) {
            events[keyCode].forEach(function (e) {
                if (e.event === event) {
                   if (typeof e.callback === 'function') {
                       e.callback.call(this,[keyCode,event]);
                   }
                }
            });
        }
    };

    if (typeof element === 'object' && typeof element.addEventListener === 'function') {
        target = element;
    } else {target = window;}

    target.addEventListener("keydown",function (e) {
        keyDown(e.keyCode);
    },false);
    target.addEventListener("keyup",function (e) {
        keyUp(e.keyCode);
    },false);

    var addKeyListener = function addKeyListener(keyCode,event,callback,capture) {
        callback = callback || function (e) {};
        capture = capture || false;
        event = event || "any";

        if (!keyCode) {return false;}
        if (!events.hasOwnProperty(keyCode)) {
            events[keyCode] = [];
        }
        return events[keyCode].push({keyCode:keyCode,event:event,capture:capture,callback:callback});
    };
    return {
        keys:keyboard,
        addKeyListener:addKeyListener
    };
};
