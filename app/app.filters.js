
"use strict";

angular.module("todoApp").filter("jsDate", function () {
    return function (x) {
        return new Date(parseInt(x.substr(6)));
    };
});