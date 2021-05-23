const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
//const normalize = require('normalize-url');

//@router Post api/users
//@router User registration route
//@router Public (no token or authenciated is needed to reach this router)

//Bring in the User Model we created.
const User = require('../../Models/User')

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Password should be minimum 6 chars').isLength({min:6})

],async(req,res)=>{
    console.log(req.body);  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 
    

    const {name,email,password}= req.body;

    try {
        let user = await User.findOne({ email });
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }
  
        const avatar =gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
          });
  
        user = new User({
          name,
          email,
          avatar,
          password
        });
  
        const salt = await bcrypt.genSalt(10);
  
        user.password = await bcrypt.hash(password, salt);
  
        await user.save();

        res.send('user registered...');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
}
);



module.exports = router;