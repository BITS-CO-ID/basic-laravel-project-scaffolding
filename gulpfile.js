var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.less('application.less', 'public/assets/css')
		.scripts([
			'jquery/dist/jquery.min.js',
			'bootstrap/dist/js/bootstrap.min.js'
		], 'public/assets/js/vendor.js', 'vendor/bower_components')
		.scripts([
			'application.js'
		], 'public/assets/js/application.js', 'resources/assets/js')
		.copy('vendor/bower_components/jquery/dist/jquery.min.map', 'public/assets/js/jquery.min.map')
		.copy('vendor/bower_components/bootstrap/fonts', 'public/assets/fonts')
		.phpUnit();
});