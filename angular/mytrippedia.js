(function() {
  var app = angular.module('mytrippedia', []);

  app.controller('SearchController',  function(){
    var search = this;
    search.hotels = hotels;
  });
app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('./store-products.json').success(function(data){
        store.products = data;
    });
  }]);
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
app.directive('hotelDetails',function(){
return{
	restrict:'E',
	templateUrl:"./templates/hotel-details",
};
});
app.directive('hotelDescription',function(){
return{
	restrict:'E',
	templateUrl:"hotel-description",
};
});

var hotels=[
    {
      "Address1": "35 G.N Chetty Road, Thiyagara Nagar, Tamil Nadu",
      "Address2": "T Nagar",
      "City": "Chennai",
      "CityId": "1320653",
      "CountryCode": "IN",
      "CountryName": "India",
      "Facilities": {
        "HotelFacilityType": "INTERNET_WIFI"
      },
      "GeoLocation": {
        "Latitude": "13.046084062",
        "Longitude": "80.242498218"
      },
      "HighestPrice": "17612",
      "HotelGroupUrl": null,
      "HotelImageUrlList": {
        "string": [
          "http:\/\/pix2.agoda.net\/hotelimages\/814\/81466\/81466_15071611160032421932.jpg?s=312x",
          "http:\/\/pix3.agoda.net\/hotelimages\/814\/81466\/81466_14031318580018691429.jpg?s=312x",
          "http:\/\/pix3.agoda.net\/hotelimages\/814\/81466\/81466_15071611160032421933.jpg?s=312x",
          "http:\/\/pix5.agoda.net\/hotelimages\/110\/110082\/110082_120607180901725.jpg?s=312x"
        ]
      },
      "HotelMasterId": "1211553",
      "HotelName": "The Accord Metropolitan",
      "HotelResultList": {
        "HotelResultSmall": [
          {
            "AgencyName": "Venere",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=41&HotelName=The Accord Metropolitan&Price=10401&Url=http%3a%2f%2femea.venere.com%2fPPCHotelDetails%3fhotelid%3d247331%26pos%3dVCOM_EMEA%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26cur%3dINR%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.vcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Budget Room - Room Only",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "10401",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Travelnow",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=49&HotelName=The Accord Metropolitan&Price=10401&Url=http%3a%2f%2fwww.travelnow.com%2ftemplates%2f413300%2fhotels%2f247331%2foverview%3flang%3den%26currency%3dINR%26standardCheckin%3d6%2f1%2f2016%26standardCheckout%3d6%2f3%2f2016%26roomsCount%3d1%26rooms%5b0%5d.adultsCount%3d2&DisplayCurrencyCode=INR",
                "Description": "Budget Room - Room Only",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "10401",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Expedia",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=98&HotelName=The Accord Metropolitan&Price=10401&Url=http%3a%2f%2fwww.expedia.com%2fgo%2fhotel%2finfo%2f1209167%2f2016-06-01%2f2016-06-03%3fNumRooms%3d1%26NumAdult-Room1%3d2%26tpid%3d1%26eapid%3d74424%26langid%3d1033%26rffrid%3dMbition-Rahlat.US&DisplayCurrencyCode=INR",
                "Description": "Budget Room - Room Only",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "10401",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Hotels.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=58&HotelName=The Accord Metropolitan&Price=10401&Url=http%3a%2f%2fwww.hotels.com%2fPPCHotelDetails%3fhotelid%3d247331%26view%3dprices%26pos%3dHCOM_IE%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.hcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Budget Room - Room Only",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "10401",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Getaroom",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=10441&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fe72021fd-4ae2-533e-bb79-23452faf6ca1%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3da40d1f65b7%26rate_code%3d05f9e0f117%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Budget Room - Room Only",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "10441",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=12675&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fe72021fd-4ae2-533e-bb79-23452faf6ca1%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d5d92739a3c%26rate_code%3d8948e90073%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Superior",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "12675",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=12675&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fe72021fd-4ae2-533e-bb79-23452faf6ca1%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d5d92739a3c%26rate_code%3d93307d187c%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Superior",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "12675",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=13081&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fe72021fd-4ae2-533e-bb79-23452faf6ca1%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dd289092a56%26rate_code%3d1eb0dc8023%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin Superior",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "13081",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=17612&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fe72021fd-4ae2-533e-bb79-23452faf6ca1%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dd9cdb12e3f%26rate_code%3dd08cf427d2%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin Premier",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "17612",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "DHR",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=51&HotelName=&Price=12718&Url=http%3a%2f%2fwww.dhr.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26processid%3dJL-71796375INFQM00%26b2bid%3dmbition%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Superior",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "12718",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=51&HotelName=&Price=12718&Url=http%3a%2f%2fwww.dhr.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26processid%3dJL-71796375INFQM00%26b2bid%3dmbition%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Superior",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "12718",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=51&HotelName=&Price=17127&Url=http%3a%2f%2fwww.dhr.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26processid%3dJL-71796375INFQM00%26b2bid%3dmbition%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Premier",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "17127",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=51&HotelName=&Price=17127&Url=http%3a%2f%2fwww.dhr.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26processid%3dJL-71796375INFQM00%26b2bid%3dmbition%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Premier",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "17127",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Otel.com",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=50&HotelName=&Price=12944&Url=http%3a%2f%2fwww.otel.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition1%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26mwlydi%3dLO0BFud%26processid%3dY7-08369000INFQM00%26cin%3d2016-06-01%26cout%3d2016-06-03%26roomdata%3d1%3b2%7c0%7c%7c%26cur%3dSEK%26b2bid%3dmbition1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Superior",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "12944",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=50&HotelName=&Price=12944&Url=http%3a%2f%2fwww.otel.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition1%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26mwlydi%3dLO0BFud%26processid%3dY7-08369000INFQM00%26cin%3d2016-06-01%26cout%3d2016-06-03%26roomdata%3d1%3b2%7c0%7c%7c%26cur%3dSEK%26b2bid%3dmbition1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin\/Double Superior",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "12944",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=50&HotelName=&Price=15292&Url=http%3a%2f%2fwww.otel.com%2fhotels%2fthe_accord_metropolitan_hotel_chennai.htm%3fns%3dme%7cmbition1%7c%7c%7c%7chot%7c%7c%7c%7c%7c%7c2%7c%7c%26mwlydi%3dTiYt3zo%26processid%3dY7-08369000INFQM00%26cin%3d2016-06-01%26cout%3d2016-06-03%26roomdata%3d1%3b2%7c0%7c%7c%26cur%3dSEK%26b2bid%3dmbition1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Twin\/Double Room (T)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15292",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Skoosh",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=13170&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d458289%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Superior (1 Bed)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "13170",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=13170&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d458289%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d2%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Superior (2 Beds)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "13170",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          }
        ]
      },
      "Location": "35, GN Chetty Road , T Nagar",
      "LowestPriceFromStat": "421",
      "Meal": "BREAKFAST_INCLUDED",
      "NrOfReviews": "1653",
      "NumberOfNights": "2",
      "RatingsPerAgency": {
        "RatingForAgency": [
          {
            "AgencyName": "Booking.com",
            "Rating": "7.70"
          },
          {
            "AgencyName": "Agoda",
            "Rating": "8.20"
          },
          {
            "AgencyName": "EasyToBook",
            "Rating": "8.00"
          },
          {
            "AgencyName": "Skoosh",
            "Rating": "8.00"
          },
          {
            "AgencyName": "Expedia",
            "Rating": "8.20"
          },
          {
            "AgencyName": "Hotels.com",
            "Rating": "8.20"
          },
          {
            "AgencyName": "Venere",
            "Rating": "8.20"
          }
        ]
      },
      "Recommended": null,
      "RoomCount": "162",
      "StarRating": "5",
      "State": null,
      "TripAdvisorNumberOfReviews": null,
      "TripAdvisorReviewRating": null,
      "Type": "UNKNOWN",
      "UniqueHighestPrice": "13170",
      "UserReviewRating": "8.0714285714285712",
      "Zipcode": "600017",
      "ZooverDeeplink": null,
      "ZooverRating": null,
      "ZooverReviewlink": null
    },
    {
      "Address1": "183 NSK Salal,Arcot Road,Vadapalani",
      "Address2": null,
      "City": "Chennai",
      "CityId": "1320653",
      "CountryCode": "IN",
      "CountryName": "India",
      "Facilities": null,
      "GeoLocation": {
        "Latitude": "13.050992",
        "Longitude": "80.208311"
      },
      "HighestPrice": "15821",
      "HotelGroupUrl": null,
      "HotelImageUrlList": {
        "string": [
          "http:\/\/pix3.agoda.net\/hotelimages\/706\/70671\/70671_14042816380019230433.jpg?s=312x",
          "http:\/\/pix4.agoda.net\/hotelimages\/706\/70671\/70671_14042816360019230342.jpg?s=312x",
          "http:\/\/pix4.agoda.net\/hotelimages\/706\/70671\/70671_15072017200032629254.jpg?s=312x",
          "http:\/\/pix5.agoda.net\/hotelimages\/110\/110082\/110082_120607180901725.jpg?s=312x"
        ]
      },
      "HotelMasterId": "1211086",
      "HotelName": "Green Park",
      "HotelResultList": {
        "HotelResultSmall": [
          {
            "AgencyName": "EasyToBook",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Green Park Hotel&Price=10203&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d121538%26exact%3d121538%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dJ1Il4g8FIXooaY-yq7n_p-FAI_NHEejejvZ163iPjDBx0_bKZ7GMUbgvGdTA2vBaMpUvXab9S_BUlxJ-OwY0VfHrnwMsVpDn%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room, One Double or Two Single Beds + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "10203",
                    "Currency": "SEK"
                  },
                  "Type": "OTHER"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Green Park Hotel&Price=13678&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d121538%26exact%3d121538%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3d8Gi9y5FgEMCLQien68aq3lBQLYCEy0aEJPCoRWuwac_3Bp_pKLjva9jwu79DwY3G_jYBzV9R7Y95B7IDznb-8vFX7zqMNTPg%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Business Double or Twin Room + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "13678",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Venere",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=41&HotelName=Green Park Hotel&Price=10305&Url=http%3a%2f%2femea.venere.com%2fPPCHotelDetails%3fhotelid%3d307428%26pos%3dVCOM_EMEA%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26cur%3dINR%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.vcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room, 1 Double or 2 Single Beds",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "10305",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Travelnow",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=49&HotelName=Green Park Hotel&Price=10305&Url=http%3a%2f%2fwww.travelnow.com%2ftemplates%2f413300%2fhotels%2f307428%2foverview%3flang%3den%26currency%3dINR%26standardCheckin%3d6%2f1%2f2016%26standardCheckout%3d6%2f3%2f2016%26roomsCount%3d1%26rooms%5b0%5d.adultsCount%3d2&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room, 1 Double or 2 Single Beds",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "10305",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Expedia",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=98&HotelName=Green Park Hotel&Price=10305&Url=http%3a%2f%2fwww.expedia.com%2fgo%2fhotel%2finfo%2f3433828%2f2016-06-01%2f2016-06-03%3fNumRooms%3d1%26NumAdult-Room1%3d2%26tpid%3d1%26eapid%3d74424%26langid%3d1033%26rffrid%3dMbition-Rahlat.US&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room, 1 Double or 2 Single Beds",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "10305",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Hotels.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=58&HotelName=Green Park Hotel&Price=10305&Url=http%3a%2f%2fwww.hotels.com%2fPPCHotelDetails%3fhotelid%3d307428%26view%3dprices%26pos%3dHCOM_IE%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.hcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room, 1 Double or 2 Single Beds",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "10305",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Getaroom",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=10346&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2ff7f5fb2b-b98c-52eb-872a-a36083ba65a8%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d6db8c41b1d%26rate_code%3de5a989b1a3%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room, 1 Double or 2 Single Beds",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "10346",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=13586&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2ff7f5fb2b-b98c-52eb-872a-a36083ba65a8%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d5c1a1de18d%26rate_code%3d370fb8846e%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin Deluxe",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "13586",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=14782&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2ff7f5fb2b-b98c-52eb-872a-a36083ba65a8%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3df2187c2144%26rate_code%3d331bce305d%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin Business-club",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "14782",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Skoosh",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=14540&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d207461%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Double Or Twin - Bed And Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "14540",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=15821&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d207461%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d2%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Or Twin Business-Club - Bed And Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15821",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          }
        ]
      },
      "Location": "183 N S K Salai, Vadapalani ,",
      "LowestPriceFromStat": "532",
      "Meal": "BREAKFAST_INCLUDED",
      "NrOfReviews": "714",
      "NumberOfNights": "2",
      "RatingsPerAgency": {
        "RatingForAgency": [
          {
            "AgencyName": "Agoda",
            "Rating": "8.10"
          },
          {
            "AgencyName": "Booking.com",
            "Rating": "8.00"
          },
          {
            "AgencyName": "Skoosh",
            "Rating": "9.00"
          },
          {
            "AgencyName": "EasyToBook",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Expedia",
            "Rating": "8.80"
          },
          {
            "AgencyName": "Hotels.com",
            "Rating": "8.80"
          },
          {
            "AgencyName": "Venere",
            "Rating": "8.80"
          }
        ]
      },
      "Recommended": null,
      "RoomCount": "171",
      "StarRating": "5",
      "State": null,
      "TripAdvisorNumberOfReviews": null,
      "TripAdvisorReviewRating": null,
      "Type": "HOTEL",
      "UniqueHighestPrice": "14540",
      "UserReviewRating": "8.6428571428571423",
      "Zipcode": "600026",
      "ZooverDeeplink": null,
      "ZooverRating": null,
      "ZooverReviewlink": null
    },
    {
      "Address1": "636, Anna Salai, Teynampet",
      "Address2": null,
      "City": "Chennai",
      "CityId": "1320653",
      "CountryCode": "IN",
      "CountryName": "India",
      "Facilities": {
        "HotelFacilityType": "INTERNET_WIFI"
      },
      "GeoLocation": {
        "Latitude": "13.033794921",
        "Longitude": "80.244154929"
      },
      "HighestPrice": "25709",
      "HotelGroupUrl": null,
      "HotelImageUrlList": {
        "string": [
          "http:\/\/media.expedia.com\/hotels\/4000000\/3870000\/3860400\/3860321\/3860321_100_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/4000000\/3870000\/3860400\/3860321\/3860321_101_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/4000000\/3870000\/3860400\/3860321\/3860321_102_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/4000000\/3870000\/3860400\/3860321\/3860321_12_b.jpg"
        ]
      },
      "HotelMasterId": "1211599",
      "HotelName": "Raintree Anna Salai",
      "HotelResultList": {
        "HotelResultSmall": [
          {
            "AgencyName": "EasyToBook",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=12962&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3d56d-k-kp2iRyJhIQ_GJ8m7lxzCIwidIWHhptonmBtdExNJTS3F8Hm62-YSKvQEd9YgMbR6L2X-kMQWE16dxq2BNTjbTRvnY8%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Two Persons Deluxe Room (8 rooms left)",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "12962",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=13626&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dJPw183l6gq0lpH5eyqt8d7kCPSUp9wi5Z18IUwIPFREsPVN_NHn7Bx4Cm5IQlvS7t17ze7b636jCdyYLLL3eZDv5CjRscdZc%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Two Persons Deluxe Room + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "13626",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=14880&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dNv3qFcRVaQZFYjjJq3ubC58JKQIcAbwFy0z3CRC6yKIiQBK5_sqZic6yuaqzP0ucRFjnlSRfACS9nOcepAoDX12rrb3vdX2E%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Club Room - Breakfast Included (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "14880",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=15624&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dLuvGCs7xNAvenWVeq432IkFmK_71KX0DEl5PBGtRYMoirgb-EEditDxFq-F1UhivPsYA9jy0RbzEee9BqRMqmCHGzWIJbCXF%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Club Room - Seven Days Advance Purchase Offer- CP Plan + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15624",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=15655&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dQh_AlDcZFaK5YxlIxtq79YXc9Xh0IBtwzsYpdHEcF33LC95fknM-_Ohg7d5ca9dwR7IAD3JdcUQStciIY8KDVizYSMURt-8o%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room - Egencia Preferred With Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15655",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=17111&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3d1l26zzi8mkRQEeWX5zVH_B4CQuGk1uIMDBf0V5iY51e5H_2NPiHSVjKlOAJCaSElMAo-JglCLvyPjzdIuog0xUO-CjpmgdcA%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Club Room - 14 Days Advance Purchase Offer- CP Plan + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "17111",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=24489&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dqXGZnTqbsiQcvBep221wXAhNWXqb08OHwWPcYf6U_l2sHkrcCejz1h89goKP_f9HVURziBGPZO74UHLfOjqLWbjglrw2p3CP%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Executive Suite, One King Bed + Breakfast (2 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "24489",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=The Raintree, Anna Salai&Price=25709&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d115768%26exact%3d115768%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dzQhlK9h5Y867gCTqO-ueJ612ELSzgDDu4VzEElqQGkUNq1V-pFVqC2NfnhEkuZUrKWtVnP__1UZDPxnnol6pMar5GUbH0LLz%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Executive Suite, One King Bed - Seven Days Advance Purchase Offer- CP Plan + Breakfast (2 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "25709",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Venere",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=41&HotelName=The Raintree, Anna Salai&Price=13087&Url=http%3a%2f%2femea.venere.com%2fPPCHotelDetails%3fhotelid%3d357171%26pos%3dVCOM_EMEA%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26cur%3dINR%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.vcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "13087",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Travelnow",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=49&HotelName=The Raintree, Anna Salai&Price=13087&Url=http%3a%2f%2fwww.travelnow.com%2ftemplates%2f413300%2fhotels%2f357171%2foverview%3flang%3den%26currency%3dINR%26standardCheckin%3d6%2f1%2f2016%26standardCheckout%3d6%2f3%2f2016%26roomsCount%3d1%26rooms%5b0%5d.adultsCount%3d2&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "13087",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Expedia",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=98&HotelName=The Raintree, Anna Salai&Price=13087&Url=http%3a%2f%2fwww.expedia.com%2fgo%2fhotel%2finfo%2f3860321%2f2016-06-01%2f2016-06-03%3fNumRooms%3d1%26NumAdult-Room1%3d2%26tpid%3d1%26eapid%3d74424%26langid%3d1033%26rffrid%3dMbition-Rahlat.US&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "13087",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Hotels.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=58&HotelName=The Raintree, Anna Salai&Price=13087&Url=http%3a%2f%2fwww.hotels.com%2fPPCHotelDetails%3fhotelid%3d357171%26view%3dprices%26pos%3dHCOM_IE%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.hcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Deluxe Room",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "13087",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Getaroom",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=13139&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d59f1cc0764%26rate_code%3d46c9508d50%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "13139",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=15810&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d1e9dff09a5%26rate_code%3dea40f516ca%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Single - City View 1BR\/1BA 295 Sq.Ft Standard Floor - 2 twin (single) beds or 1 double bed",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "15810",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=16464&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d97e015f679%26rate_code%3d6b117dd59a%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room with Breakfast - 2 twin (single) beds or 1 double bed",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "16464",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=16913&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d2594b5e444%26rate_code%3d82d7fe099c%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Room with Breakfast - 1 double bed and 2 twin (single) beds",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "16913",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=17589&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dc7971a08a3%26rate_code%3d5b9c68a8a9%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Double Room Deluxe - Bed and Full Breakfast",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "17589",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=17589&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dc7971a08a3%26rate_code%3db969ddce77%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Twin Room Deluxe - Bed and Full Breakfast",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "17589",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=18537&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f238d3712-1cd1-51b4-9e2e-1d81074958ce%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3d859966b3e4%26rate_code%3d799753379a%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                  "Description": "Club Single with Breakfast - 1 king bed",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "18537",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Skoosh",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=14872&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d798054%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Double - Room Only",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "14872",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=15455&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d798054%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d2%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Double - Bed And Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15455",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          }
        ]
      },
      "Location": "636 Anna Salai Teynampet ,",
      "LowestPriceFromStat": "704",
      "Meal": "BREAKFAST_INCLUDED",
      "NrOfReviews": "663",
      "NumberOfNights": "2",
      "RatingsPerAgency": {
        "RatingForAgency": [
          {
            "AgencyName": "Booking.com",
            "Rating": "8.60"
          },
          {
            "AgencyName": "EasyToBook",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Skoosh",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Expedia",
            "Rating": "9.20"
          },
          {
            "AgencyName": "Hotels.com",
            "Rating": "9.20"
          },
          {
            "AgencyName": "Venere",
            "Rating": "9.20"
          }
        ]
      },
      "Recommended": null,
      "RoomCount": "230",
      "StarRating": "5",
      "State": null,
      "TripAdvisorNumberOfReviews": null,
      "TripAdvisorReviewRating": null,
      "Type": "UNKNOWN",
      "UniqueHighestPrice": "14872",
      "UserReviewRating": "9.0333333333333332",
      "Zipcode": "600018",
      "ZooverDeeplink": null,
      "ZooverRating": null,
      "ZooverReviewlink": null
    },
    {
      "Address1": "531 GST Road, St. Thomas Mount",
      "Address2": null,
      "City": "Chennai",
      "CityId": "1320653",
      "CountryCode": "IN",
      "CountryName": "India",
      "Facilities": {
        "HotelFacilityType": "INTERNET_WIFI"
      },
      "GeoLocation": {
        "Latitude": "12.994495889",
        "Longitude": "80.187488793"
      },
      "HighestPrice": "33624",
      "HotelGroupUrl": null,
      "HotelImageUrlList": {
        "string": [
          "http:\/\/media.expedia.com\/hotels\/1000000\/530000\/524500\/524459\/524459_74_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/1000000\/530000\/524500\/524459\/524459_75_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/1000000\/530000\/524500\/524459\/524459_76_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/1000000\/530000\/524500\/524459\/524459_77_b.jpg"
        ]
      },
      "HotelMasterId": "1211418",
      "HotelName": "Radisson Blu",
      "HotelResultList": {
        "HotelResultSmall": [
          {
            "AgencyName": "EasyToBook",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Radisson Blu Hotel Chennai&Price=16452&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d86688%26exact%3d86688%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dYuzSLuBV8FDIhXR_vyp3YRfnIdnrKflZpvuSfJM0pVNBXWiRjlM7vNX36_iJxbsJY4vi_0TXjEdeoa3yzLwcCR5luzXBEy86%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe - Advance Purchase. (8 rooms left)",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "16452",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Radisson Blu Hotel Chennai&Price=19783&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d86688%26exact%3d86688%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dLZrVj_7tmDFbmZrzcqMjx8gxntM5gjf-pJ07-fcd9iHWr7S0rV7kzV8BYU3nI_Au4IUK9apeur7c-eZhvkdDyymstkllNSy6%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Two Persons Business Class (8 rooms left)",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "19783",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Radisson Blu Hotel Chennai&Price=23980&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d86688%26exact%3d86688%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dSBLjv83Gou5dju2E3IEhpE5DFNi_Kq-nKkPHDsBOEEMiTg5qoydrV0DHpoas6kv1vfJrkrljdZhDqkZkWAL5Kcyq10M_zmhl%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Two Persons Business Class + Breakfast (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "23980",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Radisson Blu Hotel Chennai&Price=33624&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d86688%26exact%3d86688%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3duS2jaMOLdiiIKVT5dHHHmWjjr7Uup51QsMsoL11RhhigkyFsVsoU1bqpG7vfItp3BdFUFJvOsHxBrlONDX6WMPYKItcTqrir%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Two Persons Executive Suite (2 rooms left)",
                  "Meal": "UNKNOWN",
                  "Price": {
                    "Cost": "33624",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Venere",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=41&HotelName=Radisson Blu Hotel Chennai&Price=16614&Url=http%3a%2f%2femea.venere.com%2fPPCHotelDetails%3fhotelid%3d187380%26pos%3dVCOM_EMEA%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26cur%3dINR%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.vcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Deluxe - Advance Purchase.",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "16614",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Travelnow",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=49&HotelName=Radisson Blu Hotel Chennai&Price=16614&Url=http%3a%2f%2fwww.travelnow.com%2ftemplates%2f413300%2fhotels%2f187380%2foverview%3flang%3den%26currency%3dINR%26standardCheckin%3d6%2f1%2f2016%26standardCheckout%3d6%2f3%2f2016%26roomsCount%3d1%26rooms%5b0%5d.adultsCount%3d2&DisplayCurrencyCode=INR",
                "Description": "Deluxe - Advance Purchase.",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "16614",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Expedia",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=98&HotelName=Radisson Blu Hotel Chennai&Price=16614&Url=http%3a%2f%2fwww.expedia.com%2fgo%2fhotel%2finfo%2f524459%2f2016-06-01%2f2016-06-03%3fNumRooms%3d1%26NumAdult-Room1%3d2%26tpid%3d1%26eapid%3d74424%26langid%3d1033%26rffrid%3dMbition-Rahlat.US&DisplayCurrencyCode=INR",
                "Description": "Deluxe - Advance Purchase.",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "16614",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Getaroom",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=16678&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2fba2e4217-ed69-5334-90a5-681b86376e16%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dae7744911b%26rate_code%3da8b8adab16%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                "Description": "Deluxe - Advance Purchase.",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "16678",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Skoosh",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=23534&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d1419154%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Double - Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "23534",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=23534&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3d9vqx4EIe-c1980%3a1980-i160601-n2-r1a2-curGBP%26hotel_id%3d1419154%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d2%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Deluxe Twin - Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "23534",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Hotels.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=58&HotelName=Radisson Blu Hotel Chennai&Price=24033&Url=http%3a%2f%2fwww.hotels.com%2fPPCHotelDetails%3fhotelid%3d187380%26view%3dprices%26pos%3dHCOM_IE%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.hcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Business Class",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "24033",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          }
        ]
      },
      "Location": "531 Gst Road, St.thomas Mount ,",
      "LowestPriceFromStat": "822",
      "Meal": "BREAKFAST_INCLUDED",
      "NrOfReviews": "830",
      "NumberOfNights": "2",
      "RatingsPerAgency": {
        "RatingForAgency": [
          {
            "AgencyName": "Booking.com",
            "Rating": "8.30"
          },
          {
            "AgencyName": "ZleepingHotels",
            "Rating": "0.00"
          },
          {
            "AgencyName": "EasyToBook",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Expedia",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Hotels.com",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Venere",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Skoosh",
            "Rating": "9.00"
          }
        ]
      },
      "Recommended": null,
      "RoomCount": "101",
      "StarRating": "5",
      "State": "Chennai",
      "TripAdvisorNumberOfReviews": null,
      "TripAdvisorReviewRating": null,
      "Type": "HOTEL",
      "UniqueHighestPrice": "24033",
      "UserReviewRating": "8.8833333333333346",
      "Zipcode": "600016",
      "ZooverDeeplink": null,
      "ZooverRating": null,
      "ZooverReviewlink": null
    },
    {
      "Address1": "No.94,Satyadev Avenue Chennai Mrc Nagar, Ra Puram 600028 India",
      "Address2": "MRC Nagar, Santhome",
      "City": "Chennai",
      "CityId": "1320653",
      "CountryCode": "IN",
      "CountryName": "India",
      "Facilities": {
        "HotelFacilityType": [
          "GYM",
          "GYM",
          "POOL"
        ]
      },
      "GeoLocation": {
        "Latitude": "13.01728",
        "Longitude": "80.270555"
      },
      "HighestPrice": "24437",
      "HotelGroupUrl": null,
      "HotelImageUrlList": {
        "string": [
          "http:\/\/media.expedia.com\/hotels\/3000000\/2450000\/2442800\/2442753\/2442753_22_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/3000000\/2450000\/2442800\/2442753\/2442753_23_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/3000000\/2450000\/2442800\/2442753\/2442753_30_b.jpg",
          "http:\/\/media.expedia.com\/hotels\/3000000\/2450000\/2442800\/2442753\/2442753_40_b.jpg"
        ]
      },
      "HotelMasterId": "1211515",
      "HotelName": "Somerset Greenways Chennai",
      "HotelResultList": {
        "HotelResultSmall": [
          {
            "AgencyName": "Booking.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=47&HotelName=Somerset Greenways Chennai&Price=11811&Url=http%3a%2f%2fwww.booking.com%2fhotel%2fin%2fsomerset-greenways-chennai.html%3fcheckin%3d2016-06-01%26aid%3d347358%26lang%3den%26checkout%3d2016-06-03%26no_rooms%3d1%26group_adults%3d2%26selected_currency%3dINR%26label%3drahlat&DisplayCurrencyCode=INR",
                "Description": null,
                "Meal": "NONE",
                "Price": {
                  "Cost": "11811",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "EasyToBook",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Somerset Greenways Chennai&Price=12720&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d158873%26exact%3d158873%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3d4WTiHPV3mvCYAsraMn46NsyN9lXfCMPLoWVX-F6QWmD__k639fsyM00pk1hB9ynklnmdu_U9LK5ZTpQwc71nd_2T2Fj_vPu8%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Executive Studio, One King Bed, City View - Breakfast Included (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "12720",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Somerset Greenways Chennai&Price=15971&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d158873%26exact%3d158873%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dno1ao7CnxS4rfE140kgpPAG1Dg-UdG2oOqqYWoE-oS5CIJW6r6vxfHV2RpFI_qVLgcsoTUfSPGZxKGYs1f2uGgkNUzUbnE_W%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Premier Apartment, One Bedroom, City View - Breakfast Included (8 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "15971",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Somerset Greenways Chennai&Price=22017&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d158873%26exact%3d158873%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dJjsAexbX4jfKx9wNb9vcUt2oALYZbbqms2UaWIMuq1zXt1AGtsTyyVIwyb1y4WPseMAbtD6iy8tNbc2tPudeUX8VrH_ybdR1%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Executive Apartment, Two Bedrooms, City View - Breakfast Included (5 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "22017",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=43&HotelName=Somerset Greenways Chennai&Price=24437&Url=http%3a%2f%2fwww.easytobook.com%2fhotel_proxy.php%3fhotel_id%3d158873%26exact%3d158873%26lang%3den%26arrival%3d01-06-2016%26departure%3d03-06-2016%26currency%3dINR%26prs_arr%255B0%255D%3d2%26amu%3d280824270%26utm_source%3dFlygstolar.se%26utm_medium%3daffiliate%26utm_term%3dChennai%26utm_content%3detb4%26utm_campaign%3den%26rtoken%3dwT9mz0TsMzlkwgZwv8XPjMVhIIJB1ApYK7ce8EICFfYEj2ayZQ-ILt7K2jSsTuUTLvETfYxYU8tIyZnPUTxeYMGw2scGDCgT%26label%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Premier Apartment, Two Bedrooms, Lake View - Breakfast Included (7 rooms left)",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "24437",
                    "Currency": "SEK"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          },
          {
            "AgencyName": "Travelnow",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=49&HotelName=Somerset Greenways Chennai&Price=12852&Url=http%3a%2f%2fwww.travelnow.com%2ftemplates%2f413300%2fhotels%2f390190%2foverview%3flang%3den%26currency%3dINR%26standardCheckin%3d6%2f1%2f2016%26standardCheckout%3d6%2f3%2f2016%26roomsCount%3d1%26rooms%5b0%5d.adultsCount%3d2&DisplayCurrencyCode=INR",
                "Description": "Executive Studio, 1 King Bed, City View - Breakfast Included",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "12852",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Venere",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=41&HotelName=Somerset Greenways Chennai&Price=12852&Url=http%3a%2f%2femea.venere.com%2fPPCHotelDetails%3fhotelid%3d390190%26pos%3dVCOM_EMEA%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26cur%3dINR%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.vcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Executive Studio, 1 King Bed, City View - Breakfast Included",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "12852",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Hotels.com",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=58&HotelName=Somerset Greenways Chennai&Price=12852&Url=http%3a%2f%2fwww.hotels.com%2fPPCHotelDetails%3fhotelid%3d390190%26view%3dprices%26pos%3dHCOM_IE%26locale%3den_IE%26arrivalDate%3d01%252F06%252F2016%26departureDate%3d03%252F06%252F2016%26numberOfRooms%3d1%26adultsPerRoom%3d2%26rffrid%3dmdp.hcom.EM.413.158.02&DisplayCurrencyCode=INR",
                "Description": "Executive Studio, 1 King Bed, City View - Breakfast Included",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "12852",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Expedia",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=98&HotelName=Somerset Greenways Chennai&Price=12852&Url=http%3a%2f%2fwww.expedia.com%2fgo%2fhotel%2finfo%2f2442753%2f2016-06-01%2f2016-06-03%3fNumRooms%3d1%26NumAdult-Room1%3d2%26tpid%3d1%26eapid%3d74424%26langid%3d1033%26rffrid%3dMbition-Rahlat.US&DisplayCurrencyCode=INR",
                "Description": "Executive Studio, 1 King Bed, City View - Breakfast Included",
                "Meal": "BREAKFAST_INCLUDED",
                "Price": {
                  "Cost": "12852",
                  "Currency": "EUR"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Getaroom",
            "Rooms": {
              "Room": {
                "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=45&HotelName=&Price=12902&Url=http%3a%2f%2fwww.getaroom.com%2fhotels%2f28cde389-d5c4-5e62-8fb9-bbab1e5dde35%3faffiliate%3d06653e94%26check_in%3d06%2f01%2f2016%26check_out%3d06%2f03%2f2016%26currency%3dSEK%26price_code%3dabc653adae%26rate_code%3dea6cda4805%26rinfo%3d%255B%255B18%252C18%255D%255D&DisplayCurrencyCode=INR",
                "Description": "Executive Studio, 1 King Bed, City View - Breakfast Included",
                "Meal": "UNKNOWN",
                "Price": {
                  "Cost": "12902",
                  "Currency": "SEK"
                },
                "Type": "NOT_SPECIFIED"
              }
            }
          },
          {
            "AgencyName": "Skoosh",
            "Rooms": {
              "Room": [
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=17068&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3dySBCLi3A-c1980%3a1980%3a6497-i160601-n2-r1a2-curGBP%26hotel_id%3d1497331%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d1%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Double Room - Room And Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "17068",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                },
                {
                  "BookingUrl": "http:\/\/www.ate.nu\/hotel-go.ashx?SearchDataId=143237&AgencyId=44&HotelName=&Price=17068&Url=http%3a%2f%2fwww.skoosh.com%2fs%2ftwibo%2fbooking_review.html%3fresult_id%3dySBCLi3A-c1980%3a1980%3a6497-i160601-n2-r1a2-curGBP%26hotel_id%3d1497331%26currency_name%3dGBP%26partner%3dFGS%26b2b%3d1%26opt%3d2%26subaffiliate%3drahlat&DisplayCurrencyCode=INR",
                  "Description": "Room Twin - Room And Breakfast",
                  "Meal": "BREAKFAST_INCLUDED",
                  "Price": {
                    "Cost": "17068",
                    "Currency": "EUR"
                  },
                  "Type": "NOT_SPECIFIED"
                }
              ]
            }
          }
        ]
      },
      "Location": "No. 94 Sathyadev Avenue , MRC Nagar, Santhome",
      "LowestPriceFromStat": "632",
      "Meal": "BREAKFAST_INCLUDED",
      "NrOfReviews": "255",
      "NumberOfNights": "2",
      "RatingsPerAgency": {
        "RatingForAgency": [
          {
            "AgencyName": "Skoosh",
            "Rating": "9.00"
          },
          {
            "AgencyName": "EasyToBook",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Booking.com",
            "Rating": "8.50"
          },
          {
            "AgencyName": "Expedia",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Hotels.com",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Venere",
            "Rating": "9.00"
          },
          {
            "AgencyName": "Agoda",
            "Rating": "8.60"
          }
        ]
      },
      "Recommended": null,
      "RoomCount": "187",
      "StarRating": "5",
      "State": null,
      "TripAdvisorNumberOfReviews": null,
      "TripAdvisorReviewRating": null,
      "Type": "UNKNOWN",
      "UniqueHighestPrice": "17068",
      "UserReviewRating": "8.87142857142857",
      "Zipcode": "600028",
      "ZooverDeeplink": null,
      "ZooverRating": null,
      "ZooverReviewlink": null
    }
  ];
})();
