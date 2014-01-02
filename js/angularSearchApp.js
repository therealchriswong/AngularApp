var angularSearchApp = angular.module("angularSearchApp", [
	'ngRoute',
	'angularSearchControllers',
	'phonecatFilters',
	'phonecatServices',
	'phonecatAnimations',
	'itunesServices'
]);

angularSearchApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
      		when('/phones', {
      			templateUrl: 'partials/phone-list.html',
        		controller: 'TweetListCtrl'
      		}).
      		when('/phones/:phoneId', {
        		templateUrl: 'partials/phone-detail.html',
        		controller: 'TweetDetailCtrl'
      		}).
      		when('/itunes', {
        		templateUrl: 'partials/itunes-list.html',
        		controller: 'ItunesListCtrl'
      		}).
      		otherwise({
        		redirectTo: '/'
      		});
	}]);