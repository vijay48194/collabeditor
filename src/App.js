import React, { Component } from 'react';
import Editor from './Editor';
import Home from './Home';
import {BrowserRouter as BR, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BR>
	        <div className="container">
	          <Route exact path="/" component={Home}></Route>
	          <Route exact path="/Editor" component={Editor}></Route>
	        </div>
      	</BR>
    );
  }
}

export default App;
