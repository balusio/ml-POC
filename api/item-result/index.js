const priceSetter = require('../utils/set-price');
const itemToSort = require('../utils/sort-item');

exports.productItem = function(item){

  let itemResponse = new itemToSort(item);
  itemResponse.addQuantity(item.sold_quantity);
  return itemResponse;
}