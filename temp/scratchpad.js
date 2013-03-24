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
"browser_support_error_feature" : "A feature needed by the application is not supported by the browser.",