var myApp = angular.module("family", ["firebase"]);
	myApp.controller("fam", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
	var ref = new Firebase("https://fiery-inferno-1915.firebaseio.com/dummyData");
	var foc = new Firebase("https://fiery-inferno-1915.firebaseio.com/focus");
	$scope.dummy = $firebaseArray(ref);
	$scope.focus = $firebaseArray(foc);

	$scope.addNewPerson = function() {
		$scope.dummy.$add({ id: $scope.id2 , firstName: $scope.firstName, lastName: $scope.lastName , baptism: $scope.baptism , confirmation : $scope.confirmation , initiatory : $scope.initiatory , endowment : $scope.endowment}).then(function(ref){
	});
	};

	$scope.addNewPerson = function() {
		$scope.dummy.$delete({ id: $scope.id2 , firstName: $scope.firstName, lastName: $scope.lastName , baptism: $scope.baptism , confirmation : $scope.confirmation , initiatory : $scope.initiatory , endowment : $scope.endowment}).then(function(ref){
	});
	};


	
	$scope.searchPerson = function() {
		var list = $firebaseArray(ref);
		list.$loaded().then(function() {
		console.log(list, typeof($scope.id), list.$getRecord($scope.id));
		var searched = list.$getRecord($scope.id);
		if(searched != null)
		{$scope.focus.$add(searched);}
		else console.log("not found");
		});
	};
	}
]);
