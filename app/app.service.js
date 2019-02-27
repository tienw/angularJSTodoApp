"use strict";

angular.module("todoApp").factory("todoService", function ($http) {
    var todoService = {
        getList: function(){
            return $http.get('app/data/todo.json');
        }
    }
    return todoService;
})
