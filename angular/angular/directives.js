(function(){
var app= angular.module('hotel-directives',[]);
app.directive('hotelDetails',function(){
return{
	restrict:'E',
	templateUrl:"./templates/hotel-details.html",
};
});
app.directive('hotelDescription',function(){
return{
	restrict:'E',
	templateUrl:"./templates/hotel-description.html",
};
});
app.directive('hotelImages',function(){
return{
	restrict:'E',
	templateUrl:"./templates/hotel-images.html",
	contoller:function($scope){
			this.facilities ="GYM";
			this.setFacilities=function($facilities){
				console.log($scope);
				this.facilities=facilities;
				console.log("yo");
				};
			this.doesContain=function($facility){
				console.log(this.facilities);
				console.log("hi");
				if(this.facilities.indexOf(facility)!==-1){
					return 0;	
					}
				else return 1;
				}
			},
	controllerAs:"hImages"
};
});

}
)();
