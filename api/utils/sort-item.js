// @ts-nocheck
const utils = require('./set-price');
function itemToSort(item){
  
  this.sortedItem = {
      id : item.id,
      title : item.title, // title
      picture : item.thumbnail,// thumbnail
      price: utils.setPrice(item.price,item.currency_id),
      shipping: item.shipping.free_shipping // shipping.free_shipping
    }

};

itemToSort.prototype.addQuantity = function(quantity){
  let newElements = {
    sold_quantity: quantity
  }

  Object.assign(this.sortedItem, newElements);

}
module.exports = itemToSort;


