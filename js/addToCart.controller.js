angular.module('cart').controller('TodoCart',function($scope, cartItems, $window){

  $scope.items = [
    {
      "id":1,
      "category":"ansars",
      "name":"ansar",
      "cost":20,
      "count":0,
      "itemsAvailableCount":5
      
    },{
      "id":2,
      "category":"ansars",
      "name":"ganesh",
      "cost":45,
      "count":0,
      "itemsAvailableCount":5
    }
  ];

  $scope.addToCart = function(item) {
    cartItems.addToCart(item);
  };

  $scope.showCartItems = function() {
    $scope.cartedItems = cartItems.showCartItems();
  };

  $scope.removeFromCart = function(item, index) {
    $scope.cartedItems.splice(index,1);
    cartItems.removeFromCart(item);
  };

  $scope.changeCountOfItems = function(item, count, index) {
    $scope.cartedItems[index].cartedItemcost = item.cost * count;
    cartItems.changeCountOfItems(item, count);
  };

/*  $scope.onExit = function() {
    localStorage.cartedItems = JSON.stringify(storedItems);
  };

  $window.onbeforeunload =  $scope.onExit;*/
});