"use strict"
/*
    @file: mouseBondage.js
    @author: Michael Schmoll
    @homepage: http://nappysoft.com
*/
/*
 @function: mouseBondage
 @param: args.bindTarget, args.dragThreshold
*/
var mouseBondage = function(args) {
        var that = this;
        var obj = {};
        obj.bindTarget = args.bindTarget || window;
        obj.x = 0;
        obj.y = 0;
        obj.oldX = 0;
        obj.oldY = 0;
        obj.deltaX = 0;
        obj.deltaY = 0;
        obj.direction = {x:0,y:0};
        obj.angle = 0;
        obj.dragging = false;
        obj.dragThreshold = args.dragThreshold || 10;
        obj.dragDistance = {x:0,y:0};
        obj.buttons = {states:[false,false,false],names:{0:"left",left:0,1:"middle",middle:1,2:"right",right:2}};
        obj.keys = {shift:false,ctrl:false,alt:false,keyCode:0};
        obj.down = false;
        obj.downPos = {x:0,y:0};
        obj.upPos = {x:0,y:0};
        obj.lastEvent = null;
        obj.lastEventResult = false;
        obj.isKeyDown = function (opts) {
                opts = opts || {key:"any"};
                var result = null;
                switch (opts.key) {
                        case "any": result = (obj.keys.shift === true || obj.keys.ctrl === true || obj.keys.alt === true || obj.keys.keyCode !== 0);
                                break;
                        case "shift": result = obj.keys.shift;
                                break;
                        case "ctrl": result = obj.keys.ctrl;
                                break;
                        case "alt": result = obj.keys.alt;
                                break;
                        default: result = false;
                }
                return result;
        };
        obj.processEvent = function (e) {
            var eventResult = true;
            obj.buttons.states[e.button] = !obj.buttons.states[e.button];
            obj.keys.shift = e.shiftKey;
            obj.keys.alt = e.altKey;
            obj.keys.ctrl = e.ctrlKey;
            obj.keys.keyCode = e.keyCode;

                if (e.pageX || e.pageY) {
                    obj.x = e.pageX;
                    obj.y = e.pageY;
                } else {
                    obj.x = document.body.scrollLeft + document.documentElement.scrollLeft;
                    obj.y = document.body.scrollTop + document.documentElement.scrollTop;
                }
                obj.x -= obj.bindTarget.offsetLeft;
                obj.y -= obj.bindTarget.offsetTop;

            obj.deltaX = obj.x - obj.oldX;
            obj.deltaY = obj.y - obj.oldY;

            obj.direction.x = (obj.deltaX < 0)?-1:(obj.deltaX === 0)?0:1;
            obj.direction.y = (obj.deltaY < 0)?-1:(obj.deltaY === 0)?0:1;


             if (obj.down) {
                    obj.dragDistance.x = obj.x - obj.downPos.x;
                    obj.dragDistance.y = obj.y - obj.downPos.y;
            };

            switch (e.type) {
                case "mousedown":
                        obj.buttons.states[e.button] = true;
                        obj.down = true;
                        obj.downPos.x = obj.x;
                        obj.downPos.y = obj.y;
                        eventResult = true;
                        break;
                case "mouseup":
                        obj.upPos.x = obj.x;
                        obj.upPos.y = obj.y;
                        obj.buttons.states[e.button] = false;
                        obj.dragging = false;
                        obj.dragDistance.x = obj.upPos.x - obj.downPos.x;
                        obj.dragDistance.y = obj.upPos.y - obj.downPos.y;
                        eventResult = true;
                        break;
                case "mousemove":
                        if(obj.buttons.states[e.button] && !obj.dragging && obj.dragThreshold !== 0) {
                            if(Math.abs(obj.dragDistance.x) >= obj.dragThreshold || Math.abs(obj.dragDistance.y) >= obj.dragThreshold) {
                                obj.dragging = true;
                            }
                        }
                        eventResult = true;
                        break;
                case "click":
                        eventResult = true;
                        break;
                case "dblclick":
                        eventResult = true;
                        break;
                case "contextMenu":
                        eventResult = false;
                        break;
                case "mouseover":
                        eventResult = true;
                        break;
                case "mouseout":
                        eventResult = true;
                        break;
                case "mouseenter":
                        eventResult = true;
                        break;
                case "mouseleave":
                        eventResult = true;
                        break;

                default:
                        break;
            }
            obj.oldX = obj.x;
            obj.oldY = obj.y;
            obj.lastEvent = null;
            obj.lastEvent = Object.create(e);
            //for (var prop in e) {
            //    obj.lastEvent[prop] = e[prop];
            //}
            obj.lastEventResult = eventResult;
            return eventResult;
        };
        // custom events
        obj.onDragStart = function (eventInfo) {};
        return obj;
    };
