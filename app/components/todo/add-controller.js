"use strict";

angular.module("todoApp").controller("TodoAddController", function ($scope, $window, $mdBottomSheet){
    
    this.back = () => {
        $window.history.back();
    }

    $scope.keyboardPress = (keyEvent) => {
        if (keyEvent.which === 13){
            $mdBottomSheet.hide($scope.description);
        }
    }
});