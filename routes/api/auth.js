const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//const config = require('config');
const { check, validationResult } = require('express-validator');

//@router GET api/auth
//@router TEST route
//@router Public (no token or authenciated is needed to reach this router)

router.get('/',(req,res)=>res.send('auth route working...'));

router.post(
    '/',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        else {
            console.log('user logged it');
           return res.send('Logged in');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
module.exports = router;