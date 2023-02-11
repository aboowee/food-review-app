import React from "react";

const FoodList = (props) => {
  return (
    <div>
      <h3>Here are your top Restaurants!</h3>
      {/* <button onClick={()=>{props.onSubmit('/rating')}}>Sort By Review</button> */}
      <button onClick={()=>{props.sorting('rating')}}>Sort By Review</button>
      <button onClick={()=>{props.sorting('visits')}}>Sort By Visits</button>
      {/* <button onClick={()=>{props.onSubmit('/visits')}}>Sort By Visits</button> */}
      {props.restaurantsList.slice().reverse().map((restaurant) => {
      return (
        <div key={restaurant._id} className="restaurantInfo">
          <div id="restaurantName">{restaurant.restaurant}</div>
          <div>Type of Food: {restaurant.foodType}</div>
          <div>Your Review: {restaurant.rating.toFixed(2)}</div>
          <div>Times Visited: {restaurant.visits}</div>
        </div>
      )
      })}
    </div>
  )
}

export default FoodList;