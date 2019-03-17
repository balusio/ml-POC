const express = require('express');
const app = express();
const search_actions = require('./search-result-handlers');
const axios = require('axios');
const port = 8080;
// FIRST SEND QUERY PARAM FOR SEARCH
app.get('/items', function (req, res) {
  if(req.query.hasOwnProperty('search')){
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`).then((response)=>{
      let itemsToReturn = response.data.results.slice(0, 4);
      let sorted_elem = search_actions.filter_search(itemsToReturn);
      res.send(sorted_elem);
    }).catch(err=>{
      console.log(err);
      res.send(err);
      throw new Error("Api mercado libre inaccseible"); // Express will catch this on its own.
      
    });
  } else{
    res.send('error, búsqueda vacia');
  }


});

/// USED PARAM URL FOR SENT
app.get('/items/:id', function (req, res) {
  res.send(`param id = ${req.params.id}`);  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))