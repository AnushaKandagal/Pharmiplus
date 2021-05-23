const express = require('express');
const router = express.Router();

//@router GET api/profile
//@router TEST route
//@router Public (no token or authenciated is needed to reach this router)

router.get('/',(req,res)=>res.send('profile route working...'));

module.exports = router;