import React , {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutAction} from '../../Actions/auth';

const Navbar =({auth:{isAuthenticated,loading},logoutAction}) =>{
  const authLinks = (
    <ul>
       //add  link to products
     
      <li>
        <a onClick={logoutAction} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='#!'>Home</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> PharmiPlus
        </Link>
      </h1>
      {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};



Navbar.propTypes={
   logoutAction:PropTypes.func.isRequired,
   auth:PropTypes.object.isRequired
}

const mapSateToProps= state=>({
  auth:state.auth
})


export default connect(mapSateToProps,{logoutAction})(Navbar)
