maker.image_preloader = (function () {
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