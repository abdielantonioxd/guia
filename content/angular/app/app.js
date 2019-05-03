var app = angular.module("aplication",['ui.bootstrap']).config(function ($sceProvider) {
  $sceProvider.enabled(false);
});
app.filter('pagination', function() {
	return function(input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	}
});