/*
la estructura deberia sera lgo como: 
  1.- application general de entrada
  2.- Routing para los items
      2.1 controlador de datos y funciones para 
        2.1.1. búsqueda
        2.1.2. item
  3.- Helpers de configuracioón global

*/
const express = require('express');
const app = express();
const serachActions = require('./search-result');
const itemActions = require('./item-result');
const order_category =require('./search-result/category-order');
const axios = require('axios');
const cors = require('cors');
const port = 8080;
require('dotenv').config();

<<<<<<< HEAD
=======
app.disable('x-powered-by');

var whitelist = ['http://localhost:3000','http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

>>>>>>> develop
// FIRST SEND QUERY PARAM FOR SEARCH
app.get('/items',cors(corsOptions), function (req, res) {

  if(req.query.hasOwnProperty('search')){
    axios.get(`${process.env.API_URL}sites/MLA/search?q=${req.query.search}`).then((response)=>{
      let category_object;
      let itemsToReturn = response.data.results.slice(0, 4);
      let filtered_search = {
        categories: [],
        items: serachActions.filter_search(itemsToReturn)
      }
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

/// USED PARAM URL FOR SENT
app.get('/items/:id', cors(corsOptions), function (req, res) {
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))