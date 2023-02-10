import React from "react";

const FoodList = (props) => {
  return (
    <div>
      <h3>Here are your top Restaurants!</h3>
      <button>Sort By Restaurant</button>
      <button>Sort By Food Type</button>
      {props.restaurantsList.map((restaurant) => {
      return (
        <div key={restaurant._id} class="restaurantInfo">
          <div>Restaurant: {restaurant.restaurant}</div>
          <div>Type of Food: {restaurant.foodType}</div>
          <div>Your Review: {restaurant.rating}</div>
          <div>Times Visited: {restaurant.visits}</div>
        </div>
      )
      })}
    </div>
  )
}

export default FoodList;