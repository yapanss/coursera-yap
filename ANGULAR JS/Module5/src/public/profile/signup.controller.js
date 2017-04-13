(function(){
"use strict";
angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['signupService'];

function signupController(signupService){
	var ctrl = this;
	ctrl.firstName = "";
	ctrl.lastName = "";
	ctrl.email = "";
	ctrl.phone = "";
	ctrl.favorite = "";
	
	ctrl.check = function(submitData){
		ctrl.affiche = false;
		ctrl.errorMessage = "";
		console.log("submitData :",submitData.firstName);
		var promise = signupService.checkFavorite(ctrl.favorite);
		promise.then(function(success){
			ctrl.affiche = true;
			signupService.affiche = true;

			signupService.infos = {
				first_name : ctrl.firstName,
				last_name : ctrl.lastName,
				email : ctrl.email,
				phone : ctrl.phone,
				favorite : ctrl.favorite,
				favoriteShort : signupService.rep.category_short_name,
				rep : signupService.rep,
				menuFilter : ctrl.favorite[1]
			};
			console.log("signupService.infos = ",signupService.infos);
			console.log("signupService.rep", signupService.rep);
		},function(error){
			ctrl.errorMessage = "No such menu number exists";
		});

	}				
}

})()