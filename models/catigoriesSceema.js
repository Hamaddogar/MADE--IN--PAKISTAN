


var mongoose = require('mongoose')
var Schema = mongoose.Schema;



const userSchema = new Schema({
  ProductName: { type: String },
  Email: { type: String },
  CompanyName: { type: String },
  phone: { type: String },
  typeselected: { type: String },
  MinBox: { type: String },
  Minpieces: { type: String },
  Price: { type: String },
  photoname:{type:Array},
  CountryName: { type: String },
  CityName: { type: String },
  FullAddress: { type: String },
  ProductionCapacity: { type: String },
  Material: { type: String },
  Type: { type: String },
  Datee: { type: String },
  Description:{type:String},
  userId:{type:String}
})


const Usercatigories = mongoose.model('Usercatigoriesss', userSchema);

module.exports = Usercatigories;