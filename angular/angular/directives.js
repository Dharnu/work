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
app.directive ('viewDeals',function(){
return{	restrict:'E',
	templateUrl:"./templates/view-deals.html",
	}
});
app.filter("isArray",function(){
	return function(input){
		return angular.isArray(input);};
});
app.directive('agencyRates',function(){
return{
	restrict:'E',
	templateUrl:"./templates/agency-rates.html",
	controller:function($scope){
	this.agencyData=$scope.hotel.HotelResultList.HotelResultSmall;
	this.populateAgencies=function(){
		var agencies=[];
			for (j=0;j<this.agencyData.length;j++){
			if(!angular.isArray(this.agencyData[j].Rooms.Room)){
			agencies.push(this.agencyData[j]);
//			console.log(this.agencyData[j]);
								}
			else {for(i=0;i<this.agencyData[j].Rooms.Room.length;i++){
							//		agencies.push(this.agencyData[j].Rooms.Room[i]);
								//	console.log(this.agencyData[j].AgencyName);
								//	console.log(this.agencyData[j].Rooms.Room[i]);
								agencies.push({AgencyName:this.agencyData[j].AgencyName,Rooms:{Room:this.agencyData[j].Rooms.Room[i]}});
								//console.log(a);	}
					} 
					}
}
	console.log(agencies);
	return agencies;
};

	this.agencies=this.populateAgencies();
	this.getAgencies=function(count){
	console.log(count)	;
console.log(this.agencies.slice(0,4));
	return this.agencies.slice(0,count);
	};
	
	},
	controllerAs:"aRates",
	bindToController:true,
}
});
app.directive('hotelImages',function(){
return{
	restrict:'E',
	templateUrl:"./templates/hotel-images.html",
	controller:function($scope){
		this.facilities=[];
		if($scope.hotel.Facilities)
			{this.facilities.push($scope.hotel.Facilities.HotelFacilityType);
			}
		this.doesContainFacility=function( facility){
			return this.facilities.indexOf(facility)>-1;
				}
},	controllerAs:"himages",
bindToController:true,

};
	
});

}
)();
