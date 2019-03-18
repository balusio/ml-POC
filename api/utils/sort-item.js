// @ts-nocheck
const utils = require('./set-price');
exports.itemToSort = function(item){
  
  const sortedItem = {
      id : item.id,
      title : item.title, // title
      picture : item.thumbnail,// thumbnail
      price: utils.setPrice(item.price,item.currency_id),
      shipping: item.shipping.free_shipping // shipping.free_shipping
    }

    return sortedItem;
};

