import React , {Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/LoginSignUp/Login';
import Register from './components/LoginSignUp/Register';

//import { Component } from 'react';

const App=() =>(
     <Router>
       
    <Fragment>
    <Navbar />
    <Route exact path = "/" component ={Landing} />
    <section>
      <Switch className="container">
       <Route exact path ='/register' component={Register}></Route>
       <Route exact path='/login' component={Login}></Route>
      </Switch>
    </section>
    </Fragment>
    </Router>
  );


export default App;
