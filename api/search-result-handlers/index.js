// Resources 
// https://stackoverflow.com/questions/6012242/whats-the-efficiency-in-big-o-notation-of-the-in-operator-or-obj-hasownproper
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
const sortItem = require('../utils/sort-item');
exports.filter_search = function(listOfItems){
    let itemsToExport = {
        categories: [],
        items: []
    };

    listOfItems.forEach(element => {
        itemsToExport.items.push(sortItem.itemToSort(element));    
    });

    return itemsToExport;

};

