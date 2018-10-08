var express = require("express");
var app = express();
var mongojs = require("mongojs");
var path = require("path");
const collections = ["customers","owners","currentTruck","trucks","currentOwner","currentCustomer","checkouts","currentCheckout"];
const database = "EZ_db";
const db = mongojs(database,collections);
app.get("/routes",(req,res)=>{

  db.currentFoodtruckSample.find({},(err,data)=>{
    if(data){
    return res.sendFile(path.resolve(__dirname+"/../public/routes.html"));
    }
  })
  return res.sendFile(path.resolve(__dirname+"/../public/routes.html"));
});

module.exports = app;
