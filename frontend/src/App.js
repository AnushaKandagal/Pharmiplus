import React , {Fragment, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/LoginSignUp/Login';
import Register from './components/LoginSignUp/Register';
import Alert from './components/Layout/Alert';

//import { Component } from 'react';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './Actions/auth';

if(localStorage.token){
  setAuthToken(localStorage.token);
}


const App=() =>{
  
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);
  
  return(
     <Provider store={store}>
     <Router>  
    <Fragment>
    <Navbar />
    <Route exact path = "/" component ={Landing} />
    <section>
      <Alert/>
      <Switch className="container">
       <Route exact path ='/register' component={Register}></Route>
       <Route exact path='/login' component={Login}></Route>
      </Switch>
    </section>
    </Fragment>
    </Router>
    </Provider>
  );}


export default App;
