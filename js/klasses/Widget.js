NSOFT.namespace('maker.klasses.Widget');
maker.klasses.Widget = function(widgetName,widgetManager) {
var that = this,
	info = {
		id: 0,
		name:'',
		type:'',
		context: null,
		manager: undefined
	};

// private 

// @function: getID
var getID  = function getID () {
	return info.id;
};
// @function: getName
var getName  = function getName () {
	return info.name;
};
// @function: getType
var getType  = function getType () {
	return info.type;
};
// @function: getContext
var getContext  = function getContext () {
	return info.context;
};
// @function: poll
var poll  = function poll (pollInfo) {
	if (typeof this.onPoll === 'function') {
		return this.onPoll.call(this,pollInfo);
	}
	return undefined;
};
// @function: update
var update  = function update (updateInfo) {
	if (typeof this.onUpdate === 'function') {
		this.onUpdate.call(this,updateInfo);
	}
};

// init stuff
info.context = this;
info.name = widgetName || 'widget_' + new Date().getTime();
info.widgetManager = widgetManager || undefined;

// Interface

this.info 		= info;
this.getID		= getID;
this.getName		= getName;
this.getType		= getType;
this.getContext	= getContext;
this.poll		= poll;
this.update		= update;

// events
this.onPoll	= undefined;
this.onUpdate	= undefined;

};