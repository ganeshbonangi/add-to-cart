angular.module('cart').factory('cartItems',function(){
  var cart = {};

  cart.addToCart = function(item) {
    var cartObject = {}, storedItems = {}, index;
    cartObject.name = item.name;
    cartObject.cost = item.cost;
    cartObject.count = 1;
    if(localStorage.cartedItems){
      storedItems =  JSON.parse(localStorage.cartedItems) 
    }
    storedItems.addedItems = storedItems.addedItems  || {};
    storedItems.addedItems.itemstitle = storedItems.addedItems.itemstitle || [];
    storedItems.addedItems.items = storedItems.addedItems.items  || [];
    if(storedItems.addedItems.itemstitle.indexOf(cartObject.name)!==-1){
      index = storedItems.addedItems.itemstitle.indexOf(cartObject.name);
      storedItems.addedItems.items[index].count += 1;
      storedItems.addedItems.items[index].cartedItemcost = storedItems.addedItems.items[index].count * cartObject.cost;
    }else{
     storedItems.addedItems.itemstitle.push(cartObject.name);
     storedItems.addedItems.items.push(cartObject);
    }
    localStorage.cartedItems = JSON.stringify(storedItems);
  };

  cart.showCartItems = function() {
    var cartedItems;
    if(localStorage.cartedItems){
      cartedItems = JSON.parse(localStorage.cartedItems);
    }
    if(cartedItems){
      cartedItems = cartedItems.addedItems.items;
      return cartedItems;
    }
  };

  cart.removeFromCart = function(item) {
    var cartedItems = JSON.parse(localStorage.cartedItems), index;
    index = cartedItems.addedItems.itemstitle.indexOf(item.name);
    cartedItems.addedItems.itemstitle.splice(index,1);
    cartedItems.addedItems.items.splice(index,1);
    localStorage.cartedItems = JSON.stringify(cartedItems);
    if(cartedItems.length == 0) {
      localStorage.clear();
    }
  };

  cart.changeCountOfItems = function(item, count) {
    var cartedItems = JSON.parse(localStorage.cartedItems), index;
    index = cartedItems.addedItems.itemstitle.indexOf(item.name);
    cartedItems.addedItems.items[index].count = count;
    cartedItems.addedItems.items[index].cartedItemcost = cartedItems.addedItems.items[index].count * item.cost;
    localStorage.cartedItems = JSON.stringify(cartedItems);
  };

  return cart;
});