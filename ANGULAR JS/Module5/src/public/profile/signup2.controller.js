(function(){
"use strict";
angular.module('public')
.controller('signupController2', signupController2);

signupController2.$inject = ['items'];
function signupController2(items){
	var ctrl = this;
	ctrl.items = items;
	
};


})()