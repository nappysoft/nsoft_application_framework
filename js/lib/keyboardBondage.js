"use strict"
/*
    @file: keyboardBondage.js
    @author: Michael Schmoll
    @homepage: http://nappysoft.com
*/
// shift:16
// ctrl:17
// alt:18
var keyboardBondage = function(args) {
        args = args || {bindTarget:document};
        var that = this;
        var obj = {};
        obj.keyObj = function (args) {
            args = args || {};
            var key = {code: args.code || 0,
                       state: args.state || false,
                       shift: args.shift || false,
                       ctrl:  args.ctrl  || false,
                       alt:   args.alt   || false};
            return key;
        }
        obj.bindTarget = args.bindTarget;
        obj.interval = 0; //repeat events. 0 means repeatEvents are not allowed.
                        //not to sure how i am going to do this tho.
        obj.keyHistory = {
            keys:[],
            max:10,
            add:function(oKey) {
                if (this.keys.lenght + 1 > this.max) {
                    this.keys.shift();
                }
                return this.keys.push(oKey) - 1;
            },
            peek:function(position,prop) {
                var val = null;
                if (position < this.keys.length -1 || position >= 0) {
                    val = this.keys[position][prop] || null
                }
                return val;
            }
        };
        obj.keyStates = {};

        obj.keyDown = function (event) {
            //if (!obj.keyStates.hasOwnProperty(event.keyCode)) {
            //
            //}
            obj.keyStates[event.keyCode] = obj.keyObj({ code:event.keyCode,
                                                    state:true,
                                                    shift:event.shiftKey,
                                                    ctrl:event.ctrlKey,
                                                    alt:event.altKey});
            event.bubble = false;
            obj.keyHistory.add(obj.keyStates[event.keyCode]);
            if (obj.onKeyEvent){
                obj.onKeyEvent(obj.keyStates[event.keyCode]);
            };
            return true;
        };
        obj.keyUp = function (event) {
            obj.keyStates[event.keyCode].state = false;
            obj.keyHistory.add(obj.keyObj({ code:event.keyCode,
                                                    state:false,
                                                    shift:event.shiftKey,
                                                    ctrl:event.ctrlKey,
                                                    alt:event.altKey}));
            if (obj.onKeyEvent){
                obj.onKeyEvent(obj.keyStates[event.keyCode]);
            };
            return true;
        };
        obj.onKeyEvent = function (keyEvent) {
            return true;
        };
        obj.bindTarget.addEventListener("keydown",obj.keyDown,true);
        obj.bindTarget.addEventListener("keyup", obj.keyUp,true);

        return obj;
};
