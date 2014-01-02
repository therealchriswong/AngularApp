/*
 * https://itunes.apple.com/search?parameterkeyvalue
 *
 * JSON_CALLBACK is created by AngularJS, which generates a callback. 
 *
 */

var itunesServices = angular.module('itunesServices', ['ngResource']);

itunesServices.factory('Itunes', ['$resource', '$http', function($resource, $http){
    return $resource('https://itunes.apple.com/:action', 
        { action: 'search', term:'jack johnson', callback: 'JSON_CALLBACK' },
    	  { get: { method: 'JSONP'} 
    });
}]);