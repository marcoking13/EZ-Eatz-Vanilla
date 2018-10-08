const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const Routers = require("./routes/router.js");
const database = "EZ_db";
const passportGoogle = require("./config/google.js");
const FoodTruck = require("./config/FoodTruckData.js");
const ProfileChange = require("./config/profileChange.js");
const collections = ["customers","owners","currentTruck","trucks","currentOwner","currentCustomer","checkouts","currentCheckout"];
const db = mongojs(database,collections);
const path = require("path");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const passport = require("passport");
const Accounts = require("./models/accountSchema.js");
app.use(Routers);
  mongoose.connect("mongodb://localhost:27017/EZ_db",()=>{
    console.log("Database is connected");
    db.trucks.remove({});
    db.currentCustomer.remove({});
    db.currentTruck.remove({});
    db.trucks.insert(FoodTruck);
  })
app.use(passport.initialize());
app.use(passport.session());
app.listen(8000,()=>{
  console.log("App is running on localhost:8000");
})




app.post("/api/profileChange",(req,res)=>{


  var profile = req.body;
  console.log(profile);
    db.currentCustomer.find({},(err,data)=>{

      data = data[0];
      console.log(data,"DATA");
  console.log(profile,"PROFILE");
      db.customers.update({id:data.id},{
        name:profile.name,
        username:profile.username,
        phone:profile.phone,
        language:profile.language
      },(err,data)=>{
        if(err){
          console.log(err);
        }
        console.log(data);
        db.currentCustomer.remove({});
        db.currentCustomer.insert({data})
      })
    })

});

app.get("/",(req,res)=>{
  db.currentCustomer.remove({});
  res.sendFile(path.resolve(__dirname+"/public/index.html"));
});
app.get("/finder",(req,res)=>{
  res.sendFile(path.resolve(__dirname+"/public/finder.html"));
});
app.get("/menu",(req,res)=>{
  res.sendFile(path.resolve(__dirname+"/public/newmenu.html"));
})
app.get("/auth/google",passport.authenticate("google",{
  scope:["email","profile"],
  nonce:"NFCOI4N39RFCN0MMCIR0",
  redirect_uri:"http://localhost:8000/auth/google/redirect",
  prompt:"consent",
  display:"page",
  client_id:"387117738151-ni9l4rbk6hta5taj2m49opulicqpf89m.apps.googleusercontent.com"
}));
app.get("/auth/google/redirect",passport.authenticate("google",{
  successRedirect:"http://localhost:8000/finder"
}),(req,res)=>{
  res.send("Welcome : "+req.user.username);
});
app.get("/api/currentCustomer",(req,res)=>{
  db.currentCustomer.find({},(err,data)=>{
    res.json(data);
  });
});
app.get("/profile",(req,res)=>{
  res.sendFile(__dirname+"/public/profile.html");
});
app.get("/api/foodtruckSample",(req,res)=>{
  var i=0;
  var total=0;

  res.json(FoodTruck);

})

app.post("/api/currentFoodtruckSample",(req,res)=>{
  console.log(req.body.code);
  db.currentTruck.remove({});
  db.trucks.find({objectID:req.body.code},(err,data)=>{
    db.currentTruck.insert(data);

  })
  app.get("/api/currentFoodtruckSample",(req,res)=>{
    db.currentTruck.find({},(err,data)=>{

      res.json(data);
    });
  });

  app.get("/routes",(req,res)=>{
    console.log(req);

    db.currentFoodtruckSample.find({},(err,data)=>{
      if(data){
        return res.sendFile(__dirname+"/public/routes.html")
      }
    })
    res.json({
      hello:"hello"
    })
     res.sendFile(__dirname+"/public/routes.html")
  });


  app.get("/api/edit",(req,res)=>{
      console.log(req.body);
    res.redirect("/profile")
  })
  // db.currentTruck.insert(req.body,(err,res)=>{
  //   console.log(err,"eronvrei");
  //   db.currentTruck.find({},(err,data)=>{
  //       console.log(data,"rino");
  //       res.json(data);
  //   });
  });
app.post("/data/cancel",(req,res)=>{
  db.currentCheckout.remove({});
  res.redirect("/menu");
})
  app.get("/checkout",(req,res)=>{
    res.sendFile(path.resolve(__dirname+"/public/checkout.html"))
  })
  app.post("/api/currentCheckout",(req,res)=>{

    db.currentCheckout.insert(req.body,(err,res)=>{

    })
  });
  app.get("/api/currentCheckout",(req,res)=>{
    db.currentCheckout.find({},(err,data)=>{
        res.json(data);
    })
  })
