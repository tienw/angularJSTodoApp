"use strict";

angular.module("todoApp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/todo");

    $stateProvider.state("todo", {
        url: "/todo",
        templateUrl: "app/components/todo/list.html",
        title: "List",
        controller: "TodoListController",
        controllerAs: "todoList"
    })
    .state("tododetail", {
        url: "/todo/detail/:id",
        templateUrl: "app/components/todo/detail.html",
        title: "Detail",
        controller: "TodoDetailController",
        controllerAs: "todoDetail"
    })
    .state("todoadd", {
        url: "/todo/add",
        templateUrl: "app/components/todo/add.html",
        title: "Add",
        controller: "TodoAddController",
        controllerAs: "todoAdd"
    })
}])
