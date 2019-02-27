"use strict";

angular.module("todoApp", ["ui.router", "ngAnimate", "ngMaterial", "ngStorage"])
    .run(function ($rootScope, $window) {

    })
    .config(function ($mdThemingProvider, $mdGestureProvider) { 
        $mdGestureProvider.skipClickHijack();

        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('blue');
    });

