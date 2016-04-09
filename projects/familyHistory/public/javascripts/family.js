var myApp = angular.module("family", ["firebase"]);
	myApp.controller("fam", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
	var ref = new Firebase("https://fiery-inferno-1915.firebaseio.com/dummyData");
	var foc = new Firebase("https://fiery-inferno-1915.firebaseio.com/focus");
	$scope.dummy = $firebaseArray(ref);
	$scope.focus = $firebaseArray(foc);

	$scope.addNewPerson = function() {
		$scope.focus.$add({firstName: $scope.firstName, lastName: $scope.lastName , baptism: $scope.Baptism , confirmation : $scope.Confirmation , initiatory : $scope.Initiatory , endowment : $scope.Endowment}).then(function(ref){
	});
	$scope.firstName = null;
	$scope.lastName = null;
	$scope.Baptism = null;
	$scope.Confirmation = null;
	$scope.Initiatory = null;
	$scope.Endowment = null;


	};

	$scope.delete = function(key) {
		console.log(key);
		$scope.focus.$remove($scope.focus.$getRecord(key.$id)).then(function(ref){console.log("Deleted object at " + key);
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
