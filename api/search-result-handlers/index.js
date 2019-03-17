// Resources 
// https://stackoverflow.com/questions/6012242/whats-the-efficiency-in-big-o-notation-of-the-in-operator-or-obj-hasownproper
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
var sortItem = require('./item-sort');
exports.filter_search = function(listOfItems){
    var itemsToExport=[];
    listOfItems.forEach(element => {
        itemsToExport.push(sortItem.itemToSort(element));    
    });

    return itemsToExport;

};

