const mongoose = require("mongoose");
const Promise = require('bluebird');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost/foodDB");

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  restaurant: {type: String, unique: true, required: true},
  rating: {type: Number, required: true},
  visits: Number,
  foodType: String
})

const foodTypeSchema = new Schema({
  foodType: {type: String, unique: true}
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Genre = mongoose.model('Genre', foodTypeSchema);

const findRestaurant = (input = {}) => {
  return Restaurant.find(input);
};

// const sortRestaurant = (sortParam) => {
//   if (sortParam === "visits") {
//     return Restaurant.find({}).sort({visits: 1})
//   } else if (sortParam === "rating") {
//     return Restaurant.find({}).sort({rating: 1})
//   }
// }

const updateRestaurant = async (restaurantInDB) => {

  let newReview = (restaurantInDB[0].rating * restaurantInDB[0].visits + restaurantInDB.newRating) / (restaurantInDB[0].visits + 1);

  let newVisit = restaurantInDB[0].visits + 1;

  await Restaurant.updateOne({restaurant: restaurantInDB[0].restaurant}, {$set: {visits: newVisit, rating: newReview}});
}

const addRestaurant = async (restaurantInfo) => {
  await Restaurant.create({restaurant: restaurantInfo.name, rating: restaurantInfo.rating, visits: 1, foodType: restaurantInfo.foodType})
};

module.exports.findRestaurant = findRestaurant;
module.exports.addRestaurant = addRestaurant;
module.exports.updateRestaurant = updateRestaurant;
// module.exports.sortRestaurant = sortRestaurant;