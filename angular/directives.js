(function(){
var app= angular.module('directives',[]);
app.directive('hotelDetails',function(){
return{
	restrict:'E',
	templateUrl:"/templates/hotel-details",
};
});
app.directive('hotelDescription',function(){
return{
	restrict:'E',
	templateUrl:"templates/hotel-description",
};
});
}
)
