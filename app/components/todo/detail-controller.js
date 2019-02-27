"use strict";

angular.module("todoApp").controller("TodoDetailController", function ($scope, data){

    $scope.selectedItem = data;

    this.addRemindMe = (e) => {
        console.log("TBA")
    }
});