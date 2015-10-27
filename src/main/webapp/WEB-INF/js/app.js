var myapp = angular.module('MyApp',['angularfire']);

myapp.controller('FireBaseController' ,['$scope',function($scope){
	$scope.value1 = "Variable one ccheck"; 
}])