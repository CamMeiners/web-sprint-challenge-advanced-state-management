import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { grabSmurfs } from './actions';

class App extends Component {
  componentDidMount=() => {
    this.props.grabSmurfs()
  }
  render() { 
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
export default connect(null, {grabSmurfs})(App)

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.