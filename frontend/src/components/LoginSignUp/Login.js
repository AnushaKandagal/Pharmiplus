import React , {Fragment , useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginAction} from '../../Actions/auth';

const Login = ({loginAction, isAuthenticated}) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const {email, password} = formData;

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        loginAction(email,password)
      };

      //if user successfully logged then redirect to required component
    if (isAuthenticated){
      alert('user logged in')
       return <Redirect to ='/Products'/>
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form"  onSubmit={e =>onSubmit(e)}>
        <div className="form-group">
          <input type="email" 
          placeholder="Email Address"
           name="email" 
           value={email}
            onChange={e =>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e =>onChange(e)}
            required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </Fragment>
        
    )
}


Login.propTypes={
  loginAction:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}

const mapSateToProps= state=>({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapSateToProps,{loginAction})(Login)