var toDoList = angular.module('toDoList');

toDoList.appService('toDoList', function{

	var list = ['Wash Car', 'Take Out Trash']

	this.getList = function () {
		return list;
	}

	this.addItem = function (item) {
		list.push(item);
	}

	this.removeItem = function (i) {
		list.splice(i,1);
	}


});