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