const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articalSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    number:String,
    age:String,
    country:String,
    gender:String,
},{ timestamps: true });

const User  = mongoose.model("User",articalSchema);

module.exports = User ;
