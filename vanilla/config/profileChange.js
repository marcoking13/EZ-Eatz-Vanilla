const express = require("express");
const app = express();
const port = 8000;



app.post("/api/profileChange",(req,res)=>{


  var profile = req.body;
  console.log(profile);
    db.currentCustomer.find({},(err,data)=>{
      console.log(data);
      db.customers.update(
        {id:data.id},
        {
        id:data.id,
        name:profile.name,
        email:profile.email,
        phone:profile.phone,
        language:profile.language
      })
    })

});
module.exports = app;
