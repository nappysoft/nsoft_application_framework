// loader_progress_screen
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