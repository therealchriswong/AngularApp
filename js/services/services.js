/*
	Create a custome service using a factory function.  Name of the service is called Phone and declare dependencies.

	$resource service is used to create a RESTful client.
*/

var phonecatServices = angular.module('phonecatServices', ['ngResource']);
 
phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);