// @ts-nocheck
exports.itemToSort = function(item){
  // var elems = {
  //   "id": "String", 
  //   "title": "String", 
  //   "price": {
  //     "currency": "String", 
  //     "amount": "Number", 
  //     "decimals": "Number"
  //   },
  //   "picture": "String", 
  //   "condition": "String", 
  //   "free_shipping": "Boolean"
    
    // function formatedPrice(amount = {}) {
       
    //     var formatedPrice = {
    //         currency: amount['currency_id'],// currency_id
    //         price: 0, //price
    //         decimals: 0// ? 
    //     };

    //     return  formatedPrice;
    //     }
    // }
    
    // const {
    //     id : id, //id
    //     title : title, // title
    //     thumbnail : picture,// thumbnail
    //     currency_id: currency,
    //     shipping: {free_shipping} // shipping.free_shipping
    // } = item;
    function setPrice(unformatedPrice,currency){
      let formatedPrice = {
        unfformatedPrice: unformatedPrice,
        currency: currency,
        amount: 0,
        decimals: 0
      };

      if(Number.isInteger(unformatedPrice)){
        formatedPrice.decimals = '00';
      } else{
        formatedPrice.decimals = (unformatedPrice % 2).toFixed(1);
      }
      
      formatedPrice.amount = unformatedPrice.toLocaleString('ARS');
      formatedPrice.amount = formatedPrice.amount.replace(/,/g, '.');
      formatedPrice.unfformatedPrice = formatedPrice.amount;
      //formatedPrice.amount = parseFloat(formatedPrice.amount);
      formatedPrice.amount = parseFloat(formatedPrice.amount);
      return formatedPrice; 
    };
    const sortedItem = {
      id : item.id,
      title : item.title, // title
      picture : item.thumbnail,// thumbnail
      price: setPrice(item.price,item.currency_id),
      shipping: item.shipping.free_shipping // shipping.free_shipping
    }
    console.log(sortedItem)
    return sortedItem;
};

