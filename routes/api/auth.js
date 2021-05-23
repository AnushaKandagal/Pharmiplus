const express = require('express');
const router = express.Router();

//@router GET api/auth
//@router TEST route
//@router Public (no token or authenciated is needed to reach this router)

router.get('/',(req,res)=>res.send('auth route working...'));

module.exports = router;