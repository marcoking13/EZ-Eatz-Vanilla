const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const Customer = require("./../models/accountSchema.js");
const collections = ["customers","owners","currentOwner","currentCustomer"];
const mongojs=require("mongojs");
const database = "EZ_db";
const db = mongojs(database,collections);

passport.serializeUser((user,done)=>{

  done(null,user.id);

  console.log(user);
});
//Learn More
passport.deserializeUser((id,done)=>{
    Customer.findById(id).then((user)=>{

      console.log(user);
      if(user){
      return done(null,user);
    }


    });
});
passport.use(
  new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID:"387117738151-ni9l4rbk6hta5taj2m49opulicqpf89m.apps.googleusercontent.com",
    clientSecret:"gShtAnzySVJLrup5AICQPLGj"
  },(keyA,keyB,profile,done)=>{

    Customer.findOne({id:profile.id}).then((response)=>{
      if(response){
         console.log("User already in database");
         db.currentCustomer.remove({});
         db.currentCustomer.insert({
           name:profile.displayName,
           id:profile.id,
           username:profile.emails[0].value,
           photos:profile.photos[0].value
         });
         return done(null,response);

      }else{
        db.currentCustomer.remove({});
        db.currentCustomer.insert({
          name:profile.displayName,
          id:profile.id,
          username:profile.emails[0].value,
          photos:profile.photos[0].value
        });
        new Customer({
          name:profile.displayName,
          id:profile.id,
          username:profile.emails[0].value,
          photos:profile.photos[0].value
        }).save().then((newUser)=>{
          if(newUser){
          return done(null,newUser);
        }
        });
      }
    });
  }));


module.export = passport;
