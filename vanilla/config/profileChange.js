const express = require("express");
const app = express();
const port = 8000;



app.post("/api/profileChanges",(req,res)=>{
  var profile = req.body;
   console.log(profile,"PROFILE");

   db.customers.find({
     username:profile.username
   },(err,data)=>{
     console.log(data);

     db.customers.update({id:data.id},{$set:
       {
        name:data.last
     }
   },(err,data)=>{
     console.log(data,"FEEDBACK")
   })
   })


});
module.exports = app;
