const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    name:String,
    id:String,
    photos:Array

});

const Customer = mongoose.model("customers",UserSchema);

module.exports = Customer;
