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
}
)();
