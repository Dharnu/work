(function() {
  var app = angular.module('mytrippedia', ['store-directives']);

  app.controller('SearchController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('hotels.json').success(function(data){
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
})();
