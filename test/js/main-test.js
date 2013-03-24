(function () {
			var widgetManager = new maker.klasses.WidgetManager('The Man');

			function onPoll (pollInfo) {
				console.log('poll:',this.getName(),pollInfo.type,pollInfo.timeStamp,new Date().getTime() - pollInfo.timeStamp);
				if (pollInfo) {
					switch (pollInfo.type) {
						case 'time': return new Date().getTime();
						default: break;
					}
				}
				return undefined;
			};
			function onUpdate (updateInfo) {
				console.log('update:',this.getName(),updateInfo.type,updateInfo.timeStamp,new Date().getTime() - updateInfo.timeStamp);
				//console.log(updateInfo);
				//console.log(this);
			};
			function getRandomList (itemsList,numItems) {
				itemsList = itemsList || [];
				numItems = (!numItems) ? itemsList.length -1 : (numItems <= 0) ? itemsList.length -1 : numItems;

				var results = [],
					itr = 0;

				for (itr; itr <= numItems; itr++) {
					results.push(itemsList[Math.ceil(Math.random() * (itemsList.length - 1))]);
				}

				return results;
			};

			function getRandomItem (itemsList) {
				itemsList = itemsList || [];
				return itemsList[Math.ceil(Math.random() * (itemsList.length - 1))]
			}

			var widgetNames = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5', 'widget6', 'widget7', 'widget8', 'widget9', 'widget10'];
			var widgetTypes = ['oneType','anotherType','aThirdType','YANW'];

			var randWidgetNames = getRandomList(widgetNames,5);
			var randWidgetTypes = getRandomList(widgetTypes,5);

			widgetNames.forEach(function (name) {
				var widget = widgetManager.widget(name,getRandomItem(widgetTypes));
				widget.onPoll = onPoll;
				widget.onUpdate = onUpdate;
			});

			var results = widgetManager.getWidgetsByName(randWidgetNames);
			console.log('getWidgetByName:',results);

			results = widgetManager.getWidgetsByName(['unknwonName']);
			console.log('getWidgetsByName:',results);

			results = widgetManager.getWidgetsByName([]);
			console.log('getWidgetsByName:',results);

			results = widgetManager.getWidgetsByType(randWidgetTypes);
			console.log('getWidgetsByType:',results);

			results = widgetManager.getWidgetsByType(['unknownType']);
			console.log('getWidgetsByType:',results);

			results = widgetManager.getWidgetsByType([]);
			console.log('getWidgetsByType:',results);

			results = widgetManager.pollWidgetsByName(randWidgetNames,{pollInfo:{type:'time'}});
			console.log('pollWidgetsByName:',results);

			results = widgetManager.makePoll({pollInfo:{type:'time'}});
			console.log('makePoll:',results);

			widgetManager.makeUpdate({updateInfo:{type:'context',context:this}});
			console.log('makeUpdate:');
}());