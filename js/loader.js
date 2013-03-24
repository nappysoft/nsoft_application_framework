window.addEventListener('load',function (event) {
	var loadList = ['js/lib/nsoft.js',
					'js/maker.js'];
	Modernizr.load({
			load: loadList,
			complete: function () {				
				maker.main_func();
			}
		});
});