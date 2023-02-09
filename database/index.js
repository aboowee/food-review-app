const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost/foodDB");

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  restaurant: {type: String, unique: true},
  rating: Number,
  vists: Number,
  foodType: String
})

const foodTypeSchema = new Schema({
  foodType: {type: String, unique: true};
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Genre = mongoose.model('Genre', foodTypeSchema);