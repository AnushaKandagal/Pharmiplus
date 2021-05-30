import React , {Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';

const App=() =>(
    <Fragment className="App">
    <Navbar />
    <Landing />
    </Fragment>
  );


export default App;
