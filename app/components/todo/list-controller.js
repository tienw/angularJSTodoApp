"use strict";

angular.module("todoApp").controller("TodoListController", function ($state, $scope, $location, $mdDialog, $mdBottomSheet, $mdToast, todoService){

  var originatorEv = null;

  this.title = $state.current.title;
  this.selectedItem = null;
  this.dataSource = null;

  this.showAdd = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'app/components/todo/add.html',
      controller: 'TodoAddController'
    }).then((v) => {
      let item = {
        id: $scope.list.length + 1,
        description: v,
        important: false,
        completed: false
      }

      let items = $scope.list;
      items.unshift(item);
      $scope.list = items;

      $mdToast.show(
        $mdToast.simple()
        .textContent('Added')
        .position('top')
        .hideDelay(3000))
      .then(()=>{
        console.log("toasted");
      }).catch(()=>{
        console.log("error toasting");
      });
    }).catch((error)=>{
      console.log(JSON.stringify(error));
    });
  };

  this.displayBy = (by) => {
    if(by === 'all'){
      $scope.list = this.dataSource;
    } else if(by === 'important'){
      $scope.list = this.dataSource.filter((data)=>{
        return data.important === true
      });
    }
  }
  
  this.getItem = (id) => {
    return $scope.list.filter(
      function(data){ return data.id == id }
    );
  };
  
  this.navigateDetail = (event, s) => {
    $mdDialog.show({
      templateUrl: 'app/components/todo/detail.html',
      locals: {
          data: s
      },
      controller: "TodoDetailController",
      controllerAs: 'todoDetail',
      bindToController: true,
      clickOutsideToClose: true,
      escapeToClose: true,
      targetEvent: event,
    });
  }
  
  
  this.navigateAdd = () => {
    $location.path('/todo/add');
  }


  this.openMenu = ($mdMenu, ev) => {
    originatorEv = ev;
    $mdMenu.open(ev);
  };

  this.toogleImportant = (id) => {
    for (var i = 0; i < $scope.list.length; ++i) {
      if ($scope.list[i]['id'] === id) {
        $scope.list[i]['important'] = !$scope.list[i]["important"];
      }
    }
  }

  this.toogleComplete = (id) => {
    for (var i = 0; i < $scope.list.length; ++i) {
      if ($scope.list[i]['id'] === id) {
        $scope.list[i]['completed'] = !$scope.list[i]["completed"];
      }
    }
  }

  this.getItem = (id) => {
    return $scope.list.filter(
      function(data){ return data.id == id }
    );
  };

  this.addItem = () => {
    let item = {
      id: $scope.list.length + 1,
      description : $scope.description,
      important: false,
      completed: false
    }
  }
  
  if(this.id){
    let item = this.getItem(this.id);
    $scope.selectedItem = item[0];
  }

  todoService.getList().then((d)=>{
    this.dataSource = d.data;
    this.displayBy('all');
  })
});
