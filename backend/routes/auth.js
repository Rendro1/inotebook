const express = require('express');
const User = require('../models/User');
const router = express.Router();

// creat a user using : POST "/api/auth". it doesn't require auth
router.post('/', (req,res)=>{
   console.log(req.body);
   const user = User(req.body);
   user.save()
   res.send(req.body);
   //    res.send("Hello");
})
module.exports = router