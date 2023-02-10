const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost/foodDB");

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  restaurant: {type: String, unique: true},
  rating: Number,
  visits: Number,
  foodType: String
})

const foodTypeSchema = new Schema({
  foodType: {type: String, unique: true}
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Genre = mongoose.model('Genre', foodTypeSchema);

const findRestaurant = () => (
  Restaurant.find({})
);

const addRestaurant = (restaurantInfo) => (
  Restaurant.create({restaurant: restaurantInfo.name, rating: restaurantInfo.rating, visits: 1, foodType: restaurantInfo.foodType})
);

module.exports.findRestaurant = findRestaurant;
module.exports.addRestaurant = addRestaurant;