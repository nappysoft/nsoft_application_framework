NSOFT.namespace('maker.klasses.WidgetManager')
maker.klasses.WidgetManager = function (managerName) {
var that = this,
	klasses = maker.klasses;
	info = {
		name: managerName || 'WidgetManager'
	},
	widgets = [];

var timeStamp = function timeStamp () {
	return new Date().getTime();
};

var widgetID = function widgetID () {
	return new Date().getTime();
};

var isWidget = function isWidget (widgetObj) {
	return (widgetObj instanceof klasses.Widget);
};

var hasWidgetName = function hasWidget (widgetName) {
	for (var index = widgets.length - 1; index >= 0; index--) {
		if (widgets[index].getName() === widgetName) {
			return widgets[index];
		}
	}
	return undefined;
};

var hasWidgetId = function hasWidget (widgetID) {
	for (var index = widgets.length - 1; index >= 0; index--) {
		if (widgets[index].getID() === widgetID) {
			return widgets[index];
		}
	}
	return undefined;
};

var getWidgetIndexByID = function getWidgetIndex (widgetID) {
	for (var index = widgets.length - 1; index >= 0; index--) {
		if (widgets[index].getID() === widgetID) {
			return index;
		}
	}
	return undefined;
};

var getWidgetIndexByName = function getWidgetIndex (widgetName) {
	for (var index = widgets.length - 1; index >= 0; index--) {
		if (widgets[index].getName() === widgetName) {
			return index;
		}
	}
	return undefined;
};

var removeWidgetByID = function removeWidgetByID (widgetID) {
	var index;
	index = getWidgetIndexByID(widgetID);
	if (index) {
		widgets.splice[index,1];
	};
};

var removeWidgetByName = function removeWidgetByName (widgetName) {
	var index;
	index = getWidgetIndexByName(widgetName);
	if (index) {
		widgets.splice[index,1];
	};
};

var addWidget = function addWidget (widgetObj) {
	var id,index;
	if (isWidget(widgetObj)) {

		id = widgetID();

		widget.info.id = id;

		index = widgets.push(widget);

		return id;	
	};
	return undefined;
};

var widget = function widget (widgetName,widgetType) {
	var widgetObj,
		id;

	widgetObj = hasWidgetName(widgetName);

	if (isWidget(widgetObj)) {
		return widgetObj;
	}

	widgetObj = new klasses.Widget(widgetName,this);
	id = widgetID();

	widgetObj.info.id = id;
	widgetObj.info.type = widgetType || 'widget';

	widgets.push(widgetObj);

	return widgetObj;
};

var pollIndividualWidget = function pollIndividualWidget (widgetObj,pollInfo) {
	pollInfo = pollInfo || {timeStamp:undefined,type:undefined};
	var stamp = timeStamp(),
		results = {info:undefined,result:undefined};

	pollInfo.timeStamp = stamp;

	if (isWidget(widgetObj)) {
		results.info = widgetObj.getName();
		results.result = widgetObj.poll.call(widgetObj,pollInfo);
	};
	return results;
};

var updataIndividualWidget = function updataIndividualWidget (widgetObj,updateInfo) {
	updateInfo = updateInfo || {timeStamp:undefined,type:undefined};
	var stamp = timeStamp();

	updateInfo.timeStamp = stamp;

	if (isWidget(widgetObj)) {
		widgetObj.update.call(widgetObj,updateInfo);
	}
};

// @function: getWidgetsByName
var getWidgetsByName = function getWidgetsByName (nameList) {
	nameList = nameList || [];
	var widgetList = {};

	// backwards for loop
	for (var index = nameList.length -1,item; index >= 0; index--) {
		widgetList[nameList[index]] = undefined;
	}

	// backwards for loop
	for (var index = widgets.length -1,item,name; index >= 0; index--) {
		item = widgets[index];
		name = item.getName();
		if(widgetList.hasOwnProperty(name)) {
			widgetList[name] = widgets[index];
		}	
	}
	return widgetList;
};

// @function: getWidgetsByType
var getWidgetsByType = function getWidgetsByType (typeList) {
	typeList = typeList || [];
	var namesString = typeList.join(','),
		widgetList = [];

	// backwards for loop
	for (var index = widgets.length -1,item,type; index >= 0; index--) {
		item = widgets[index];
		name = item.getType();
		if(namesString.match(name)) {
			widgetList.push(item);
		}
	}
	return widgetList;
};

// @function: pollWidgetsByName
var pollWidgetsByName = function pollWidgetsByName (nameList,pollOptions) {
	pollOptions = pollOptions || {pollInfo:{type:''}};
	nameList = nameList || [];
	var widgetList = {},
		results = {},
		result = null,
		widgetName = '',
		widgetObj = undefined;

	widgetList = getWidgetsByName(nameList);
	console.log('test',widgetList);

	for (widgetName in widgetList) {
		if (widgetList[widgetName] !== undefined) {
			
				widgetObj = widgetList[widgetName];

				result = pollIndividualWidget(widgetObj,pollOptions.pollInfo);

				results[widgetName] = result;

		} else {
			results[widgetName] = undefined;
		}
	}
	return {
		pollOptions: pollOptions,
		results:results
	}
};
// @function: pollWidgetsByType
var pollWidgetsByType = function pollWidgetsByType (typeList) {
	typeList = typeList || [];
};

// @function: updateWidgetsByName
var updateWidgetsByName = function updateWidgetsByName (nameList) {
	nameList = nameList || [];
};
// @function: updateWidgetsByType
var updateWidgetsByType = function updateWidgetsByType (typeList) {
	typeList = typeList || [];
};

var pollWidgetsAll = function pollWidgetsAll (pollOptions) {
	pollOptions = pollOptions || {pollInfo:{type:''}};
	var results = [],
		index,
		item;
	
	//this is synchronis polling
	for (index = widgets.length - 1; index >= 0; index--) {
		item = widgets[index];
		results.push(pollIndividualWidget(item,pollOptions.pollInfo));
	}
	
	return {
		options:pollOptions,
		results:results
	};
};

var updateWidgetsAll = function updateWidgetsAll (updateOptions) {
	updateOptions = updateOptions || {updateInfo:{type:''}};
	var index,
		item;

	for (index = widgets.length - 1; index >= 0; index--) {
		item = widgets[index];
		updataIndividualWidget(item,updateOptions.updateInfo);
	};
};

var makePoll = function makePoll (pollInfo) {
	var results;
	results = pollWidgetsAll(pollInfo);
	return results;
};

var makeUpdate = function makeUpdate (updateInfo) {
	updateWidgetsAll(updateInfo);
}

// Interface			
this.info =  info;
this.widget =  widget;
this.hasWidgetName =  hasWidgetName;
this.hasWidgetId	= hasWidgetId;
this.getWidgetsByName = getWidgetsByName;
this.getWidgetsByType = getWidgetsByType;
this.pollWidgetsByName = pollWidgetsByName;
this.makePoll =  makePoll;
this.makeUpdate = makeUpdate;
// events
this.onWidgetAdded = undefined;
this.onWidgetRemoved = undefined;

};