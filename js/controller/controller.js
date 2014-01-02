var angularSearchControllers = angular.module('angularSearchControllers', [] );

angularSearchControllers.controller('TweetListCtrl', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}]);

angularSearchControllers.controller('TweetDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
  		$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
  		$scope.mainImageUrl = phone.images[0];
  	});

  	//Update the main image
  	$scope.setImage = function(imageUrl) {
  		$scope.mainImageUrl = imageUrl;
  	}

  }]);


angularSearchControllers.controller('ItunesListCtrl', ['$scope', 'Itunes', 
  function ($scope, Itunes) {
      
      if( $scope.searchTerm != "" ) {
        $scope.ituneResults = Itunes.get();
      }
    
      $scope.doSearch = function() {
        $scope.ituneResults = Itunes.get({term:$scope.searchTerm});
      }

      $scope.popularity = function() {
        Math.floor((Math.random()*100)+1);
      }


  }]);