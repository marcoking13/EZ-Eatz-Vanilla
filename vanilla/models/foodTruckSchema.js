const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodTruckSchema = new Schema({
    ownerID:String,
    company:String,
    type:Array,
    priceAverage:Number,
    menu:Array,
    logo:String,
    images:Array,
    address:String,




});

const Truck = mongoose.model("trucks",FoodTruckSchema);

module.exports = Truck;
