"use strict";
// @file: NSOFT.js
// @lastUpdated: 3/9/2013
// @updatedBy: michael

// NSOFT
var NSOFT = {
	info:{
		namespace:'NSOFT',
		version:'1.1',
		revdate:'3.16.2013'
	},
	serialnumbers: {
		$__n:111,
		get next() { return this.$__n++;},
		set next(n) { if (n >= this.$__n) {this.$__n = n; return this.$__n} else {return -9999}}
    },
	browser: {
		supports: {
			canvas: (document.createElement('canvas') !== null),
			canvas2d: (function () {
				try {
					document.createElement('canvas').getContext('2d');
					return true;
				} catch (e) {}
				return false;
			}()),
			webgl: (function () {
				var contextNames = ["webgl","experimental-webgl","moz-webgl","webkit-3d"],
					element,
					gl;

				element = document.createElement('canvas');
				if (!element) return false;

				for(var i = 0; i < contextNames.length; i++){
		            try{
		                gl = element.getContext(contextNames[i]);
		                if(gl){
		                  break;
		                }
		            }catch(e){}
		        }
	            return (gl === undefined) ? false : true;		
			}()),
			localstorage: ('localStorage' in window),
			requestAnimationFrame : (typeof requestAnimationFrame === 'function'),
			cancelAnimationFrme : (typeof cancelAnimationFrame === 'function'),
			XMLHttpRequest: (typeof XMLHttpRequest === 'function')
		}
	},
	apps: {},
	namespace: function(ns) {
		var parts = ns.split('.'),
			object = this,
			itr,
			len;

		for (itr = 0, len = parts.length; itr < len; itr++) {
			if (!object[parts[itr]]) {
				object[parts[itr]] = {};
			}
			object = object[parts[itr]];
		}
		return object;
	},
	namespaceNS: function(host,ns) {
		var parts = ns.split('.'),
			object = host || this,
			itr,
			len;

		for (itr = 0, len = parts.length; itr < len; itr++) {
			if (!object[parts[itr]]) {
				object[parts[itr]] = {};
			}
			object = object[parts[itr]];
		}
		return object;
	},
	guid: function(){
		    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		    return v.toString(16);}).toUpperCase();
	}
};

// NSOFT.application
NSOFT.application = function (ns) {
	ns = 'apps.'+ns;
	var that = this,
		obj = undefined,
		meta = {
			timestamp: 0,
			guid: '',
			serialnumber: 0,
			namespace: ''
		},
		info = {
			appname:'',
			author:'',
			version:'',
			pubdate:'',
			updated:'',
			url:''
		},
		config = {},
		registry = {},
		storage = {},
		events = {},

		data = {
			errors: {}
		},

		init = undefined,
		setup = undefined,
		start = undefined,
		shutdown = undefined,
		close = undefined,

		lastError = {errorID:'',errorMessage:''};

	var UnknownProperty = function (message) {
		this.message = message;
	}; UnknownProperty.prototype = new Error();

	var getErrorMessage = function (errorName) {return data.errors[errorName] || 'Unknown Error';};

	var addEvent = function (eventName) {
		if (typeof eventName === undefined) {
			throw new Error('addEvent() : undefined eventName passed.')
		} else if (events.hasOwnProperty(eventName)) {
			throw new Error('addEvent() : eventName is already exists.');
			return undefined;
		}
		events[eventName] = [];
		return events[eventName];
	};

	var removeEvent = function (eventName) {
		if (typeof eventName === undefined) {
			throw new Error('removeEvent() : undefined eventName passed.')
		} else if (!events.hasOwnProperty(eventName)) {
			throw new Error('removeEvent() : eventName is not defined.');
			return;
		}
		if (events[eventName]) { delete events[eventName]; }
	};

	var triggerEvent = function (eventName,eventProps) {
		if (typeof eventName === undefined) {
			throw new Error('triggerEvent() : undefined eventName passed.')
		} else if (!events.hasOwnProperty(eventName)) {
			throw new Error('triggerEvent() : eventName is not an event.');
			return;
		}
		eventProps = eventProps || {};
		var eventList = events[eventName],
			count = eventList.length - 1,
			index,eventHandler,
			eventObj = {
				timeStamp: new Date().getTime(),
				type: eventProps.type || 'event',
				data: eventProps.data || {}
			}

		for (index = eventList.length - 1; index >= 0; index--) {
			eventHandler = eventList[index];
			if (typeof eventHandler.callback === 'function') {
				eventHandler.callback.call(that,eventProps);
			}
		};
		return true;
	};

	var triggerEventDelayed = function (eventName,delay,eventProps) {
		if (typeof eventName === undefined) {
			throw new Error('triggerEventDelayed() : undefined eventName passed.')
		} else if (!events.hasOwnProperty(eventName)) {
			throw new Error('triggerEventDelayed() : eventName is not an event.');
			return;
		}
		delay = delay || 5; // in milliseconds
		eventProps = eventProps || {};
		setTimeout(function () {
			var eventList = events[eventName],
				count = eventList.length - 1,
				index,
				eventObj = {
					timeStamp: new Date().getTime(),
					type: eventProps.type || 'event',
					data: eventProps.data || {}
				}

			for (index = eventList.length - 1; index >= 0; index--) {
				eventList[index].call(that,eventProps);
			};
			return true;
		},delay);
	};

	var addEventHandler = function (eventName,callback,dataPackage) {

		if (events.hasOwnProperty(eventName) !== true) {
			throw new Error('addEventHandler() : eventName passed is not a named event.');
			return;
		} else if (callback === undefined) {
			throw new TypeError('addEventHandler() : undefined callback passed as argument');
			return;
		} else if (typeof callback !== 'function') {
			throw new TypeError('addEventHandler() : callback passed is not a function.');
			return;
		}
		dataPackage = dataPackage || {};
		var serialnumber;
			serialnumber = NSOFT.serialnumbers.next;
			events[eventName].push({
				id:serialnumber,
				callback:callback,
				data:dataPackage
			});
		return serialnumber;
	};

	// @function: removeEventHandler
	var removeEventHandler  = function (eventName,serialNumber) {
		if (typeof eventName === undefined) {
			throw new TypeError('removeEventHandler() : eventName is undefined.');
			return;
		} if (typeof serialNumber === undefined) {
			throw new TypeError('removeEventHandler() : serialNumber is undefined');
			return;
		} else if (typeof serialNumber !== 'number') {
			throw new TypeError('removeEventHandler() : serialNumber passed is not a number');
			return;
		}
		 if (!events.hasOwnProperty(eventName)) {
			throw new Error('removeEventHandler() : eventName is not defined.');
			return;
		}
		var eventList = events[eventName],
			index = 0;
		for (index = eventList.length - 1; index >= 0; index--) {
			if (eventList[index].serialnumber === serialNumber) {
				eventList.slice(index,1);
				return;
			}
		};
		return;
	};



	// base events
	addEvent('oninit');
	addEvent('onsetup');
	addEvent('onstart');
	addEvent('onshutdown');
	addEvent('onclose');
	// data 

	// priviliged
	obj = this.namespace(ns);

	meta.timestamp= new Date().getTime();
	meta.guid= this.guid();
	meta.serialnumber= this.serialnumbers.next;
	meta.namespace= ns;

	// interface
	obj.namespace = this.namespace;
	obj.getErrorMessage = getErrorMessage;
	obj.lastError	= lastError;
	obj.meta	= meta;
	obj.info	= info;
	obj.config	= config;
	obj.registry	= registry;
	obj.storage	= storage;
	obj.events	= events;
	obj.data = data;
	obj.init	= init;
	obj.setup	= setup;
	obj.start	= start;
	obj.shutdown	= shutdown;
	obj.close	= close;
	obj.addEvent	= addEvent;
	obj.removeEvent	= removeEvent;
	obj.triggerEvent	= triggerEvent;
	obj.addEventHandler	= addEventHandler;
	obj.removeEventHandler = removeEventHandler;

	return obj;
// return {
// 	lastError : lastError,
// 	meta : meta,
// 	info : info,
// 	config : config,
// 	registry : registry,
// 	storage : storage,
// 	events : events,
// 	init : init,
// 	setup : setup,
// 	start : start,
// 	shutdown : shutdown,
// 	close : close,
// 	addEvent : addEvent,
// 	removeEvent : removeEvent,
// 	triggerEvent : triggerEvent,
// 	addEventListener : addEventListener
// };
};