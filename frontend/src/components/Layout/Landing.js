import React from 'react';
import {Link} from 'react-router-dom';

 const Landing = () => {
    return (
        <section class="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 class="x-large">PharmiPlus</h1>
          <p class="lead">
          Forgot to buy medicines? than PharmiPlus should be your ultimate health partner.
          </p>
          <div class="buttons">
            <Link to='/register' class="btn btn-primary">Sign Up</Link>
            <Link to='/login' class="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Landing