import React from 'react'

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
            <a href="register.html" class="btn btn-primary">Sign Up</a>
            <a href="login.html" class="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Landing