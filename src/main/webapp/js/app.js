var myapp = angular.module('MyApp',['firebase']);

myapp.factory('Auth',['$firebaseAuth',function($firebaseAuth){
	var ref = new Firebase("https://vish-auth.firebaseio.com");
	return $firebaseAuth(ref);
}]);

myapp.controller('FireBaseController' ,['$scope','Auth',function($scope,AuthFactory){
	AuthFactory.$onAuth(function(authData){
		$scope.authData = authData;
		console.log($scope.authData);
	});

	$scope.login = function(){

var ref = new Firebase("https://vish-auth.firebaseio.com");
		ref.authAnonymously(function(error, authData) {
 		 if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	}

	$scope.logout = function(){
		AuthFactory.$unauth();
	}

	$scope.value1 = "Variable one ccheck"; 
}]);