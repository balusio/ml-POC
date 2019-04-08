// wiki.js - Wiki route module.

const express = require('express');
const router = express.Router();
const searchHandler = require('./search-result');
const axios = require('axios');
const itemActions = require('./item-result');
const order_category =require('./search-result/category-order');

router.get('/items',function(req,res){
  if(req.query.hasOwnProperty('search')){
    axios.get(`${process.env.API_URL}sites/MLA/search?q=${req.query.search}`).then((response)=>{
      let category_object;
      let itemsToReturn = response.data.results.slice(0, 4);
      let filtered_search = {
        categories: [],
        items: searchHandler.filter_search(itemsToReturn)
      }
      console.log(filtered_search);
      if(response.data.hasOwnProperty('filters') && response.data.filters.length > 0){
        category_object = response.data.filters;
      } else{
        category_object = response.data.available_filters;
      }
      filtered_search.categories = order_category.sortCategory(category_object);
      res.send(filtered_search);
    }).catch(err=>{
      console.log(err);
      res.send(err);
      
    });

  } else{
    res.send('error, búsqueda vacia');
  }

});
router.get('/items/:id',function(req,res){
  let itemResponse;
 
  const itemDescription = axios.get(`${process.env.API_URL}items/${req.params.id}/description/`);
  // Get the items,
  axios.get(`${process.env.API_URL}items/${req.params.id}`).then((response) =>{

    const itemsCategory = axios.get(`${process.env.API_URL}categories/${response.data.category_id}`);
    // get the description and the categories from the responses 
    itemResponse = itemActions.productItem(response.data);
     // make the secondary async call and get the categories and the descriptions 
    Promise.all([itemsCategory, itemDescription]).then((response) => {
      console.log(response[0].data)
      itemResponse.categories =order_category.sortCategoryForItem(response[0].data.path_from_root);
      itemResponse.description = response[1].data.plain_text;

      
      res.send(itemResponse);
  
    }).catch(err => console.error(err));

  }).catch(err => console.error(err));
  
 

});


module.exports = router;