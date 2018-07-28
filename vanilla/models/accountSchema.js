const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    name:String,
    id:String,
    photos:Array,
    orders:Array,
    currentOrder:Object,
    card:Object,
    location:String,
    phone:Object,
    language:String,
    party:Boolean,
    

});

const Customer = mongoose.model("customers",UserSchema);

module.exports = Customer;
