import React,{Component} from "react";
import { Route,Switch } from "react-router-dom";
import SearchBar from './search-bar/search-bar';
import SearchResult from './search-result/search-result'
import Item from './item/item-detail';

import '../styles/main.scss';
class App extends Component {
  constructor(props) {
    super(props);    
  }
  render (){
    return (  
      <div>
        <SearchBar {...this.props} ></SearchBar>
        <Switch>
          <Route exact path="/items" component={SearchResult} />
          <Route exact path="/items/:id" component={Item} />
        </Switch>
      </div>
    );
  }
}

export default App;