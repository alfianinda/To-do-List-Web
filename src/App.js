import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./style.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/todolist" component={TodoList} />
          <Route path="/todoedit/:id" component={TodoEdit} />
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

