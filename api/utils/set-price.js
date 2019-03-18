exports.setPrice= function(unformatedPrice,currency){
  // SET price Object and create Decimals and currency. the number should always come as an integer
  let formatedPrice = {
    currency: currency,
    amount: unformatedPrice,
    decimals: 0
  };
  if(typeof unformatedPrice !== 'number'){
    formatedPrice.amount = Number(unformatedPrice);
  }
  if(Number.isInteger(formatedPrice.amount)){
    formatedPrice.decimals = 0;
  } else{ 
    formatedPrice.decimals = (formatedPrice.amount % 1).toFixed(2).substring(2);
    formatedPrice.decimals = parseInt(formatedPrice.decimals);
    formatedPrice.amount = Math.trunc(formatedPrice.amount);
  }
 
  //  PASS REWPRESENTATION TO FRONT END
  //formatedPrice.amount = formatedPrice.amount.toLocaleString(currency);
  // formatedPrice.amount = formatedPrice.amount.replace(/,/g, '.');
  return formatedPrice; 
};
