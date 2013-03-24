var maker = NSOFT.application('maker');
//--------------------------------------
//config information
//--------------------------------------
maker.config = {
//header information
"configuration_version": "1.0",
"configuration_format_version" : "1.0",
//use toggles
"use_stored_config" : false,
"use_local_path" : true,
"use_localstorage" : true,
"use_requestanimationframe" : true,
"use_async_xhr" : false,
"use_canvas": true,
"use_canvas_buffers" : true,
"use_buffered_canvas" : true,
//store info
"store_config_locally" : true,
"store_user_data" : false,
//security
"authentication_required" : false,
"allow_logins" : false,
//users
"user_timout" : 0,

//url information
"url_application" : "http://www.local.nappysoft.com/code/modernizr",
"url_homepage" : "http://www.local.nappysoft.com/",
"url_email" : "nappysoft@gmail.com",

//path information
"path_dir_data" : "data",
"path_dir_img" : "img",
"path_dir_javascript" : "js",
"path_dir_javascript_lib" : "js/lib",
"path_ls_main" : "nsoft.app.maker",
"path_ls_config" : "nsoft.app.maker.config",
"path_ls_user" : "nsoft.app.maker.user",

"path_file_nsoft_logo":"img/nsoft.png",

//canvas
"canvas_width" : 400,
"canvas_height" : 400,
"canvas_orientation" : "landscape",
"buffer_width" : 400,
"buffer_height" : 400,
"buffer_clear_on_update" : true,
"buffer_write_on_update" : true,
"buffer_count" : 1,
"buffer_primary":1,
"buffer_active":1,
"coordinate_math" : "cart",
//screen animation
"fps_target" : 30,
"fps_minimum" : 24,
"animation_frame_delay" : 0,
// graphics information
"draw_use_translate" : true,
"draw_sprite_centered" : true,
//image settings
"image_default_format" : "png",
"image_formats" : "png,jpg,gif",
"image_atlas_formats" : "texturepacker,json",
"image_atlas_auto_load" : true,
"image_atlas_extension" : "atlas",
"image_allow_save" : true,
//mouse
"mouse_capture_middle_button" : true,
"mouse_capture_scroll_wheel" : true,
"mouse_hide_cursor" : false,
//keyboard
"keyboard_type_rate" : 40,
//DOM
"dom_canvas_container" : "divcanvas",
"dom_canvas_id" : "appcanvas",
//events
"events_primary" : "onchange,onupdate,onframe,onnextframe,onprevframe",
//modernizer stuff
"modernizr_require__version" : "2.6.2",
"modernizr_require_canvas" : true,
"modernizr_require_canvastext" : true,
"modernizr_require_cssanimations" : true,
"modernizr_require_draganddrop" : true,
"modernizr_require_fontface" : true,
"modernizr_require_localstorage" : true,
"modernizr_require_opacity" : true,
"modernizr_require_rgba" : true,
"modernizr_require_sessionstorage" : true,
"modernizr_require_textshadow" : true,
"modernizr_require_webworkers" : true,
"modernizr_require_xmlhttprequest" : true,
"modernizr_require_requestanimationframe" : true,
"modernizr_require_cancelanimationframe" : true,
//loader stuff
"loader_show_screen" : true,
"path_file_loader_screen" : "js/maker.loader_screen.js",

//app stuff
"app_auto_load" : "false",
"path_dir_app" : "js/game",
"path_dir_app_data" : "js/game/data",
"path_file_app_main" : "js/game/game.js",
"path_file_app_config" : "js/game/game.conf.js",
};
//--------------------------------------
// error information
//--------------------------------------
maker.data.errors = {
//application_errors.conf
"no_error" : "There is no error.",
"fatal_error" : "There was a fatal error.",

//config errors
"config_error" : "There was a error with the configuration.",
"config_not_loaded_error" : "The configuration file was not loaded. (usually main.conf)",
"config_invalid" : "The configuration that is loaded is not valid",
"config_invalid_version" : "The version of the loaded config is not valid for this application",
"config_invalid_format_version" : "The format of the config that is loaded is not valid for this application.",

//stage errors
"init_error" : "There was a problem with initialization.",
"setup_error" : "There was a problem with the setup process.",
"start_error" : "There was a problem with the start process.",
"shutdown_error" : "There was a problem with the shutdown process.",
"close_error" : "There was a problem with the close process.",

//resource errors
"resource_load_error" : "There was a problem loading resources.",
"resource_missing_error" : "A resource that is required is missing.",

//require errors
"require_error" : "A requirement has not been met.",

//localstorage errors
"localstorage_write_error" : "There was a problem writing to localStorage.",
"localstorage_read_error" : "There was a problem reading from localStorage.",
"localstorage_mismatch_error" : "The information retrieved from localStorage was incorrect.",

//xhr errors
"xhr_error_get" : "There was a problem creating a connection with XMLHttpRequest.",

//network errors (may or may not be related to xhr)
"net_error" : "There was a network error.",
"net_timout_error" : "The network connection timed out.",
"net_connection_error" : "There was a network connection error.",

//http errors
"net_http_error_204" : "Network server saw request but is not sending content.",
"net_http_error_301" : "Network server says resource has move permanetly.",
"net_http_error_305" : "Network server says to use a proxy.",
"net_http_error_400" : "Network server says Bad Request.",
"net_http_error_401" : "Network server says you are unauthorized.",
"net_http_error_403" : "Network server says you are fobidden.",
"net_http_error_404" : "Network server says file not found.",
"net_http_error_405" : "Network server requet method is not allowed.",
"net_http_error_408" : "Network server says the request timed out.",
"net_http_error_429" : "Network server says too many requests.",
"net_http_error_500" : "Network server had an internal error.",
"net_http_error_511" : "Network server says authentication required.",

//browser support errors
"browser_support_error" : "The browser does not support a needed technology.",
"browser_support_error_canvas" : "The browser does not support the Canvas Element.",
"browser_support_error_2d_context" : "The browser does not support the 2d canvas Context.",
"browser_support_error_3d_context" : "The browser does not support the webGL canvas Context.",
"browser_support_error_3d" : "The browser does not support 3D drawing.",
"browser_support_error_XMLHttpRequest" : "The browser does not support AJAX requests.",
"browser_support_error_requestAnimationFrame" : "The browser does not support 'requestAnimationFrame'.",
"browser_support_error_cancelAnimationFrame" : "The frowser does not support 'cancelAnimationFrame'.",
"browser_support_error_localStorage" : "The browser does not support 'localStorage'.",
"browser_support_error_webWorkers" : "The browser does not support multi-threading with webWorkers.",
"browser_support_error_feature" : "A feature needed by the application is not supported by the browser."
};
//--------------------------------------
// objects
//--------------------------------------
maker.namespace('objects');
maker.objects['canvas_object'] = {
	x:0,y:0,width:0,height:0,
	offX:0,offY:0,type:'',
	data:undefined,
	update: function () {},
	draw: function (context) {}
};

maker.objects['canvas_object_events'] = {
	onclick:function () {},
	onmousedown:function () {},
	onmouseup:function () {},
	onstartdrag:function () {},
	onenddrag:function () {},
	ondrag:function () {},
	ondrop:function () {},
	onfocus:function () {},
	onloosefocus:function () {},
	onbeforeupdate:function () {},
	onafterupdate:function () {},
	onupdate:function () {},
	onbeforedraw:function () {},
	onafterdraw:function () {},
	ondraw:function () {},
	onactivate:function () {},
	ondeactivate:function () {}
};

maker.objects['event_object'] = {
	timeStamp:0,
	serialNumber:0,
	lifespan:0,
	type:'',
	name:'',
	payload:undefined
};
maker.objects['callback_object'] = {
	that:undefined,
	callback:function () {},
	payload:undefined
};
//--------------------------------------
// klasses
//--------------------------------------
maker.namespace('klasses');
//--------------------------------------
// utilities
//--------------------------------------
maker.namespace('utils');

//--------------------------------------
// utilities - objects
//--------------------------------------
maker.namespace('utils.objects');
maker.utils.objects.inherit = function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create)                // If Object.create() is defined...
        return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                  // Define a dummy constructor function.
    f.prototype = p;                  // Set its prototype property to p.
    return new f();                   // Use f() to create an "heir" of p.
};

maker.utils.objects.extend = function extend(o, p) {
    for(prop in p) {                         // For all props in p.
        o[prop] = p[prop];                   // Add the property to o.
    }
    return o;
};

maker.utils.objects.merge = function merge(o, p) {
    for(prop in p) {                           // For all props in p.
        if (o.hasOwnProperty[prop]) continue;  // Except those already in o.
        o[prop] = p[prop];                     // Add the property to o.
    }
    return o;
};

maker.utils.objects.restrict = function restrict(o, p) {
    for(prop in o) {                         // For all props in o
        if (!(prop in p)) delete o[prop];    // Delete if not in p
    }
    return o;
};

maker.utils.objects.subtract = function subtract(o, p) {
    for(prop in p) {                         // For all props in p
        delete o[prop];                      // Delete from o (deleting a
                                           // nonexistent prop is harmless)
    }
    return o;
};
maker.utils.objects.keys = function keys(o) {
    if (typeof o !== "object") throw TypeError();  // Object argument required
    var result = [];                 // The array we will return
    for(var prop in o) {             // For all enumerable properties
        if (o.hasOwnProperty(prop))  // If it is an own property
            result.push(prop);       // add it to the array.
    }
    return result;                   // Return the array.
};
maker.utils.objects.copyProps = function (obj,props) {
    for(var prop in props) {
        if(prop in obj[prop] && obj.hasOwnProperty(prop)) {
            obj[prop] = props[prop];
        }
    }
};
maker.utils.objects.extendProps = function (o, p) {
    for(var prop in p) {
        if (o.hasOwnProperty[prop]) {
           if(typeof p[prop] === 'object') {
                extend(o[prop],p[prop]);
           }
        }
        o[prop] = p[prop];
    }
    return o;
};
maker.utils.objects.union = function union(o,p) { return this.extend(this.extend({},o), p); };
maker.utils.objects.intersection = function intersection(o,p) { return this.restrict(this.extend({}, o), p); };

//--------------------------------------
// helpers
//--------------------------------------
maker.namespace('helpers');
// storage: localStorage/webStorage
maker.helpers.storage = (function storage () {
	var application = maker,
		objects = application.objects;

	
}());
// xhr getFileSynch
maker.helpers.xhr = (function xhr (){
	var application = maker,
		objects = application.objects,
		methods ='GET,POST,HEAD,PUT,DELETE,OPTIONS',
		synchType = false,
		defaultTimeout = 3000,
		defaultDataType = null,
		defaultDataHandler = {
			process: function(data) { return data;}
		};


	function getXMLHttpRequestObject () {
		/* From Wikipedia: https://en.wikipedia.org/wiki/XMLHttpRequest
		   Provide the XMLHttpRequest constructor for Internet Explorer 5.x-6.x:
		   Other browsers (including Internet Explorer 7.x-9.x) do not redefine
		   XMLHttpRequest if it already exists.
		 
		   This example is based on findings at:
		   http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
		*/
		if (typeof XMLHttpRequest === "undefined") {
		  XMLHttpRequest = function () {
		    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
		    catch (e) {}
		    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
		    catch (e) {}
		    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
		    catch (e) {}
		    // Microsoft.XMLHTTP points to Msxml2.XMLHTTP and is redundant
		    throw new Error("This browser does not support XMLHttpRequest.");
		  };
		} else {
			return new XMLHttpRequest();
		}
	};

	
	function createRequest(url,options) {
	var obj = Object.create(objects['xhr_request']);
		obj.xhrObject = getXMLHttpRequestObject();
		if (options) {

		}
		return obj;
	};


	function getSync (url,dataType,dataHandler) {
		dataType = dataType || defaultDataType;
		dataHandler = dataHandler || defaultDataHandler;
		var request;

		request = createRequest(url,{requestType: dataType || null});
		request.xhrObject.open('GET',url,false);
		request.xhrObject.send();
		if (request.xhrObject.status !== 200) {
			//console.log('failed');
			return undefined;
		}
		//console.log(request.xhrObject.response)
		return dataHandler.process(request.xhrObject.response);
	};

	function checkUrlSync(url) {
		
		var request;

		request = createRequest(url,{requestType: null});
		request.xhrObject.open('HEAD',url,false);
		request.xhrObject.send();
		if (request.xhrObject.status !== 200) {
			//console.log('failed');
			return undefined;
		}
		//console.log(request.xhrObject.response)
		return request.xhrObject.response;
	};

	objects['xhr_request'] = {
		methods: methods,
		method: 'GET',
		url: '',
		requestType: null, // text
		dataType: 'text',
		timeout:3000,
		xhrObject: null,
		aSync: false,
		headers:[],
		username: null,
		password: null,
		onReadyStateChange: function (state) {},
		onOpen: function () {},
		onHeadersRecieved: function () {},
		onLoading: function () {},
		onLoaded: function () {}
	};

	return {
		getXMLHttpRequestObject: getXMLHttpRequestObject,
		getRequest: createRequest,
		getSync:getSync,
		checkUrlSync:checkUrlSync
	};
}());

// image_preloader
maker.helpers.image_preloader = (function image_preloader () {
	var imageUris = [],
		images = [],
		loadedImages = 0,
		loadingErrors = 0,
		onError = function () {},
		onLoad = function () {},
		onFinished = function () {};

	function imageLoad() {
		loadedImages += 1;
		if (loadedImages === imageUris.length) {
			if (typeof onFinished === 'function') {
				onFinished(images);
				onError = function () {};
				onLoad = function () {};
				onFinished = function () {};
			}
		} else {
			if(typeof onLoad === 'function') {onLoad(loadedImages);}
		}
	};

	function imageError() {
		loadingErrors += 1;
		if (typeof onError === 'function') {onError(loadingErrors);}
		imageLoad();
	};

	function loadImageUris () {
		var uri,index,img;
		for(index = 0; index < imageUris.length; index += 1) {
			images[index] = new Image();
			img = images[index];
			img.onload = function (e) {
				imageLoad(this);
			};
			img.onerror = function (e) {
				imageError(this);
			};
			img.src = imageUris[index];
		}
	};

	function load (loaderObj) {
		var baseName = 'image_preloader.load() : ';
		if (typeof loaderObj !== 'object') {
			throw new TypeError(baseName + 'Incorrect type of parameter passed.');
			return;
		}
		if (loaderObj.hasOwnProperty('load') === false) {
			throw new Error(baseName + 'There was no load property found in the passed object.');
			return;
		}
		if (loaderObj['load'] instanceof Array === false) {
			throw new TypeError(baseName + 'Load object needs to be an array.');
			return;
		}
		images.length = 0;
		loadedImages = 0;
		loadingErrors = 0;

		imageUris = loaderObj['load'];
		onFinished = loaderObj.hasOwnProperty('onFinished') ? loaderObj['onFinished'] : onFinished;
		onError = loaderObj.hasOwnProperty('onError') ? loaderObj['onError'] : onFinished;
		onLoad = loaderObj.hasOwnProperty('onLoad') ? loaderObj['onLoad'] : onLoad;

		loadImageUris();
	};

	return {
		load:load,
		images: function () {return images;},
		loadingErrors: function () {return loadingErrors;},
		imageUris: function () {return imageUris;}
	}
}());
//--------------------------------------
//main
//--------------------------------------
(function () {
	var application = this,
		data = application.data,
		info = application.info,
		getErrorMessage = application.getErrorMessage,
		config = application.config,
		objects = application.objects,
		klasses = application.klasses,
		loadedScripts = [];

	// private

	function path(str) {
		if (config.use_local_path) {
			return str;
		}
		return config.url_application +'/';
	}
	function checkConfig(configObj,expected) {
		expected = expected || true;
	var state = true,
		statusObj = {status:'',message:'',data:undefined};

		state = (typeof configObj === 'object') === expected;
		if (state !== true) {
			statusObj = {
				status:'failed',
				message: 'fatal_error',
				data:{
					status:'failed',
					message:'config_not_loaded_error'
				}
			}
		}
		return state ? state : statusObj;
	};		
	function checkConfigVersion(configObj,expected) {
	var state = true,
		statusObj = {status:'',message:'',data:undefined};

		state = (configObj.configuration_version === expected);
		if (state !== true) {
			statusObj = {
				status:'failed',
				message: 'config_invalid',
				data:{
					status:'failed',
					message:'config_invalid_version'
				}
			}
		}
		return state ? state : statusObj;
	};
	function checkConfigFormatVersion(configObj,expected) {
	var state = true,
		statusObj = {status:'',message:'',data:undefined};

		state = (configObj.configuration_format_version === expected);

		if (state !== true) {
			statusObj = {
				status:'failed',
				message: 'config_invalid',
				data:{
					status:'failed',
					message:'config_invalid_format_version'
				}
			}
		}
		return state ? state : statusObj;
	};
	// @function: checkRequiredList
	// @arguments: object
	//
	// Checks items in the 'requireList' agianst Moderizr and
	// the expected values.
	// 
	// 'checkRequiredList' returns the item that failed. Returns on
	// first failure. If all tests are passed it returns 
	// the value of passed.
	//
	//!NOTE: changed from passing a list of objects to parsing the
	//config data for prefixed_require statements. 

	function checkRequiredList () {
		var state = true,
			statusObj = {status:'',message:'',data:undefined},
			requireList = {},
			requiredPrefix = 'moderizr_require_',
			requireCount = 0;
			

		for (key in config) {
			if(config.hasOwnProperty(key)) {
				if(key.match(requiredPrefix)) {
					requireList[key.slice(requiredPrefix.length)] = config[key];
					requireCount += 1;
				}
			}
		};
		if (requireCount > 0) {
			for(var item in requireList) {
				state = state && Modernizr[item] === requireList[item];
				if (state === false) {
					statusObj.status = 'failed';
					statusObj.message = 'browser_support_error';
					statusObj.data = {
						item : item,
						expected : requireList[item]
					}
					break;
				}
			}
		}
		return state ? state : statusObj;
	};

	// @function: checkNetworkConnection
	// @arguments: string
	//
	// Checks the network connection by using XMLHttpRequest to 
	// request a file from the given URI. The check is not aSync
	// and will wait till it gets a response or a failure.
	// The request being made is a 'GET' request.
	//
	// 'checkNetworkConnection' returns a true if successfull.
	// It returns an object with the URI and the error from 
	// the XMLHttpRequest object.
	function checkNetworkConnection(uri) {
		var state = true,
			statusObj = {status:'',message:'',data:undefined},
			xhr = null;

			xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function (obj) {
				switch (xhr.readyState) {
					case 1: break;
					case 2: break;
					case 3: break;
					case 4: 
						if (xhr.status !== 200) {
							state = false;
							statusObj.status = 'failed';
							statusObj.message = 'net_http_error_'+xhr.status;
							statusObj.data = {
								status : xhr.status,
								message : xhr.statusText
							};
						}						
						break;
				}
			}
		try {
			xhr.open('GET',uri,false);
			xhr.requestType = null;
		 	xhr.send();
		 } catch (e) {
		 	state = false;
		 	statusObj.status = 'failed';
		 	statusObj.message = 'xhr_error_get';
		 	statusObj.data = {
		 		status : e.name,
				message : e.message
			}
		 }
		return state ? state : statusObj;
	}

	// @function: setupLocalStorage
	// @arguments: none
	//	
	function setupLocalStorage() {
		var state = true,
			key = '',
			path = '',
			regExp = new RegExp("path_ls_",'ig');

		for (var key in config) {
			if (key.match(regExp)) {
				if(config.hasOwnProperty(key)) {
					path = config[key];
					if(localStorage.getItem(path) === null) {
						localStorage.setItem(path,'');
					}
				}
			}
		}
		if (config.store_config_locally) {
			localStorage.setItem(config.path_ls_config,JSON.stringify(config));
		}
		return state;
	};
	// @function: clearLocalStorage
	// @arguments: string
	//
	function clearLocalStorage(baseKey) {
		var key = '',
			index = 0,
			output = '',
			regExp = new RegExp(baseKey,'ig');
		if (localStorage) {
	    	if (localStorage.length) {
	       		for (var index = 0; index < localStorage.length; index++) {
	       			key = localStorage.key(index);
	       			if (key.match(regExp)) {
	       				console.log(key);
	       				localStorage.removeItem(key);
	       			}
	       		}
	       	}
       }	
	};

	// @function: setupCanvas
	// @arguments: none
	//	
	function setupCanvas () {
		var state = true,
			div = document.getElementById(config.dom_canvas_container);

		objects.canvas = document.createElement('canvas');

		objects.canvas.width = config.canvas_width;
		objects.canvas.height = config.canvas_height;	

		objects.canvas.setAttribute('id',config.dom_canvas_id);
		div.appendChild(objects.canvas);

		return state;
	};
	// @function: setupCanvasBuffer
	// @arguments: none
	//
	function setupCanvasBuffers () {
		var state = true,
			bufferCount = config.buffer_count;
		if (bufferCount <= 1) {
			objects.buffer = document.createElement('canvas');
			objects.buffer.width = config.buffer_width;
			objects.buffer.height = config.buffer_height;			
		} else {
			objects['buffers'] = objects['buffers'] || [];
			for (var itr = 1,buffer; itr <= bufferCount; itr++) {
				buffer = document.createElement('canvas');
				buffer.width = config.buffer_width;
				buffer.height = config.buffer_height;
				objects.buffers.push(buffer);
			}
			object.buffer = objects.buffers[config.buffer_primary || 1];
		}
		return state;
	}

	function addEvents (eventList) {
		var state = true;

		eventList.split(',').forEach(function (item) {
				application.addEvent(item);
			});
		return true;
	}

	// @function: init
	// @arguments: none
	//
	// check for needed libraries and browser configuration.
	// things like localStorage, XMLHTttpRequest, RAF, etc.
	// Initialze the actual application at this point, such
	// as registering the application online or with the system.
	//
	// 'init' returns a status object with a 'statusCode'
	// property and a value.
	function init () {
		var requiredCheck = undefined,
			check_net = false;

		requiredCheck = checkConfig(config,true);
		if (requiredCheck !== true) {
			return requiredCheck;
		}

		requiredCheck = checkConfigVersion(config,'1.0');
		if (requiredCheck !== true) {
			return requiredCheck;
		}
		
		requiredCheck = checkConfigFormatVersion(config,'1.0');
		if (requiredCheck !== true) {
			return requiredCheck;
		}

		requiredCheck = checkRequiredList();
		if (requiredCheck !== true) {
			return requiredCheck;
		}
		requiredCheck = (typeof XMLHttpRequest === 'function');
		if (requiredCheck !== true) {
			return {
				status:'failed',
				message: 'browser_support_error',
				data:{
					item:'XMLHtttpRequest',
					expected:true
				}
			}
		}
		// looks like the browser supports what we need for now.
	if (check_net) {
		requiredCheck = checkNetworkConnection(data.uri['net_check_file']);
		if (requiredCheck !== true) {
			return requiredCheck;			
		};
	};

		return {
			status:'ok',
			message:'no_error'
		}
	};

	// @function: setup
	// @arguments: none
	//
	// setup the application. Load needed config files, graphics, scripts.
	// Also load and save any needed information from and to localStorage
	// and any network sources. Any data that need to be compiled from the 
	// resources should be compiled into the correct formats in 'setup'.
	// Also, any network or system related authentication should happen here,
	// such as logging into messaging services or news/social feeds.
	// 
	// Other things like hooking to interface events could also go here.
	// 
	// 'setup' returns a status object with a 'statusCode'
	// property and a value.
	function setup () {
		var setupScreen = application.loader_screen,
			setupProgress = 0,
			setupProgressGoal = 100,
			setupState = true;

		
		setupCanvasBuffers();
		setupCanvas();
		setupScreen.load(application);
		setupScreen.setTotalProgress(setupProgressGoal);

		setupLocalStorage();
		addEvents('onchange,onupdate,onframe,onnextframe,onprevframe');
				
		//localStorePut(application.config.path_ls_main,'config',JSON.stringify(application.config));
		var test = application.helpers.xhr.getSync('./js/maker.conf.json',{requestType:'text/json'},
													{
														process: function(data) {
															return JSON.parse(data);
														}
													});
		console.log(test)
		/*
		------------------------------------------------------------------

			at this point, I think the extended modularity of the idea is 
			faulty, at least with my experience up till now. 

			from here, I should just assume the game is good. infact with
			the loader screen and progress bar this is already an 
			application. Instead of this being an application evironment,
			lets make it the main application, not just a host or a 
			framework. 

			Make the game.. make the game... make the ga.... here.

		------------------------------------------------------------------
		*/
		
		if (setupState === true) {
			return {
			status:'ok',
			message:'no_error'
			};
		}
		return setupState;
	};
	// @function: start
	// @arguments: none
	//
	// Start the main part of the application. Start the game loop, fully
	// log into servers and enter chat rooms of other services. From here
	// the main work is to be done by the game loop or user interaction or
	// other types of network interaction.
	//
	// 'start' returns a status object with a 'statusCode'
	// property and a value.  
	function start () {
		objects.canvas.addEventListener('click',function (event) {
		
		});
		return {
			status:'ok',
			message:'no_error'
		}
	};
	// @function: shutdown
	// @arguments: none
	//
	// Shutdown the application by saving any data to local or network 
	// storage. Logging out of network services. Notifying the system 
	// that the application is shutting down.
	// 
	// 'shutdown' returns a status object with a 'statusCode'
	// property and a value.
	function shutdown () {

		return {
			status:'ok',
			message:'no_error'
		}
	};
	// @function: close
	// @arguments: none
	//
	// After all the shutdown stuff is down and the application can close
	// make the system away for this. This notification could wind up with
	// the client closing or the browser changing the web page.
	//
	// 'close' returns a status object with a 'statusCode'
	// property and a value.
	function close () {
		return {
			status:'ok',
			message:'no_error'
		}
	};

	// data
	// Hardcoded information about the application.
	info.appname = 'WidgetMaker';
	info.author = 'Michael Schmoll';
	info.version = '1.0';
	info.pubdate = '3.16.2013';
	info.updated = '3.16.2013';
	info.uri = 'http://nappysoft.com/code/widgetmaker';

	data.uri = {
			"path_prefix" : "./",
			"net_check_file" : "./data/net_check_file.txt",
			"localstorage_check_key" : "NSOFT.app.maker.init.check"
	};

	// interface 
	this.path = path;
	this.loadedScripts = loadedScripts;

	// publish
	this.init = init;
	this.setup = setup;
	this.start = start;
	this.shutdown = shutdown;
	this.close = close;
	//
	this.main_func = function () {
		init();
		setup();
	};
}).apply(maker);



//--------------------------------------
// loader_progress_screen
//--------------------------------------
maker.loader_screen = (function () {
	var that = this,
		application = undefined,
		canvas = undefined,
		buffer = undefined,
		btx = undefined,
		ctx = undefined,
		width = 0,
		height = 0,
		originX = 0,
		originY = 0,
		totalProgress = 100,
		currentProgress = 0,
		progressMeterWidth = 0,
		progressMeterHeight = 15,
		logo_image_path = '',
		background_color = 'rgba(0,0,0,1)',
		progress_background = 'rgba(150,150,150,1)',
		progress_outline = 'rgba(255,255,255,1)',
		progress_meter_background = 'rgba(0,255,0,0.8)';
		

	var logo_image;

	var clearContext = function (context,width,height) {
				context.clearRect(0,0,width,height);
	};
	var fillContext = function (context,fillStyle,width,height) {
				fillStyle = fillStyle || '';
				context.save();
				context.fillStyle = fillStyle;
				context.fillRect(0,0,width,height);
				context.restore();
	};
	var clearBuffer = function () {
				clearContext(btx,width,height);
	};
	var fillBuffer = function (fillStyle) {
				fillContext(btx,fillStyle,width,height);
	};
	var writeBuffer = function () {
				ctx.drawImage(buffer,0,0);
	};

	function load(applicationObj) {
		if (!applicationObj instanceof NSOFT.application) {
			throw new Error('loader_screen.load : applicationObj passed is not of instance nsoft.application');
			return;
		}
		application = applicationObj;
		config = application.config;
		objects = application.objects;
		buffer = application.objects.buffer;
		buffers = application.objects.buffers;
		canvas = application.objects.canvas;
		btx = buffer.getContext('2d');
		ctx = canvas.getContext('2d');
		width = buffer.width;
		height = buffer.height;
		originX = (config.coordinate_math) ? width * 0.5 : 0;
		originY = (config.coordinate_math) ? height * 0.5 : 0;
		logo_image_path = config.path_file_nsoft_logo;

		logo_image = new Image();
		logo_image.onload = function () {
			progressMeterWidth = this.width;
			updateDisplay();
			
		};
		logo_image.src = logo_image_path;
	};

	function drawProgressBar() {
		var x,y,w,h,pOffX,pOffY = 0,
			lOffX = logo_image.width * 0.5,
			lOffY = logo_image.height * 0.5,
			step = 0;

		x = originX - lOffX;
		y = originY + lOffY + 5;
		w = progressMeterWidth;
		h = progressMeterHeight;

		step = w / totalProgress;

		btx.fillStyle = progress_background;
		btx.fillRect(x,y,w,h);
		btx.fillStyle = progress_meter_background;
		btx.fillRect(x,y,step * currentProgress,h);
		btx.strokeStyle = progress_outline;
		btx.strokeRect(x,y,w,h);
	};
	function drawLogo() {
		var offX = -logo_image.width * 0.5,
			offY = -logo_image.height * 0.5;
		btx.drawImage(logo_image,originX + offX,originY + offY);
	};

	function updateDisplay() {
		clearBuffer();
		fillBuffer(background_color);
		btx.save();
		drawLogo();
		drawProgressBar();
		btx.restore();
		writeBuffer();
	};

	function updateProgress(amount) {
		currentProgress  = (amount < 0) ? 0 : (amount > totalProgress) ? totalProgress : amount;
		updateDisplay();
	};

	function setTotalProgress (amount) {
		totalProgress = (amount < 0) ? 0 : amount;
		step = progressMeterWidth / totalProgress;
	}

	return {
		load:load,
		update: updateProgress,
		setTotalProgress: setTotalProgress
	}
})();
