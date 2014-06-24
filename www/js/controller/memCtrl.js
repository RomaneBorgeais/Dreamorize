function memCtrl($scope){
	$scope.pageLevel = 0;
	//console.log("page level : " + $scope.pageLevel);

	$scope.increaseLevel = function() {
    $scope.pageLevel ++;
    //console.log("page level après click : " + $scope.pageLevel);
  };
}