var toDoList = angular.module('toDoList');

toDoList.mainCtrl = ('toDoList', function () {
	$scope.test = "Hello";

	$scope.toDoItems = appService.getList();
	$scope.submitItem() = appService.addItem();
	$scope.removeItem() = appService.removeItem().$index;

});