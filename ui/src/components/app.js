import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from './search-bar/search-bar';
import SearchResult from './search-result/search-result'
import Item from './item/item-detail';
function App() {
  return (  
    <Router>
      <div>
        <SearchBar></SearchBar>
        <Route exact path="/items" component={SearchResult} />
        <Route exact path="/items/:id" component={Item} />
      </div>
    </Router>
  );
}

export default App;