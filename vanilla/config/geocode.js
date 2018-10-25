const geocode = require("geocoder");
const axios = require("axios");
const express = require("express");
const app = express();
const mongojs = require("mongojs");
const collection = ["currentTruck"];
const database = "EZ_db";
const db = mongojs(database,collection);

app.get("/routes",(req,res)=>{

db.currentTruck.find({},(err,data)=>{
  console.log(data.routes, "ROUTES");

});

res.redirect("/routes");


})


module.exports = app;
