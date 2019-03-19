const priceSetter = require('../utils/set-price');
const itemToSort = require('../utils/sort-item');

exports.productItem = function(item){
  let itemResponse = itemToSort(item);
  itemResponse.sold_quantity = item.sold_quantity;
  return itemResponse;
}