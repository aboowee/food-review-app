import React from "react";
import FoodInput from "./components/FoodInput.jsx";
import FoodList from "./components/FoodList.jsx";
import { createRoot } from 'react-dom/client';
import $ from 'jquery';

const App = () => {

const { useState, useEffect } = React;

const [restaurants, setRestaurant] = useState([]);

const sort = (sortParam) => {
  let sortedRestaurants = restaurants.slice().sort((a,b) => {
    return a[sortParam] - b[sortParam];
  })
  setRestaurant(sortedRestaurants);
}

const getList = (url) => {

  $.ajax({
    method: 'GET',
    url: url,
    dataType: 'json',
    success: (data) => {
      console.log('here');
      setRestaurant(data);
    },
    error: (error) => {
      console.log('Could not get data: ', error);
    }
  }
  )
}

const insertReview = () => {
  let insertData = {};
  insertData.rating = $('input[name="rating"]:checked').val();
  insertData.foodType = $('#foodType').find(":selected").val();
  insertData.name = $('#restaurantInput').val().toUpperCase();
  let restaurantForm = JSON.stringify(insertData);

  $.ajax({
    method: 'POST',
    url: '/restaurant',
    contentType: 'application/json; charset=UTF-8',
    data: restaurantForm,
    success: () => {
      console.log('Input submitted');
      getList('/restaurant');
    },
    error: (error) => {
      console.log('Could not submit: ', error);
    }
  });

}

useEffect(() => {
  fetch('/restaurant')
  .then((retrievedData) => (retrievedData.json()))
  .then((data) => {setRestaurant(data)})
  .catch((error) => {console.log('Cant get data,  ', error)})
}, [])

  return (
    <div>
      <h1>WELCOME TO YOUR NEXT MEAL!</h1>
      <FoodInput onSubmit={insertReview}/>
      <FoodList restaurantsList={restaurants} onSubmit={getList} sorting={sort}/>
    </div>
  )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);