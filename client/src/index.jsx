import React from "react";
import FoodInput from "./components/FoodInput.jsx";
import FoodList from "./components/FoodList.jsx";
import { createRoot } from 'react-dom/client';
import $ from 'jquery';

const App = () => {

const { useState, useEffect } = React;

const [restaurants, setRestaurant] = useState([]);

const getList = () => {

  $.ajax({
    method: 'GET',
    url: '/restaurant',
    dataType: 'json',
    success: (data) => {
      console.log(data, 'THIS DATA');
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
  insertData.name = $('#restaurantName').val();
  let restaurantForm = JSON.stringify(insertData);

  $.ajax({
    method: 'POST',
    url: '/restaurant',
    contentType: 'application/json; charset=UTF-8',
    data: restaurantForm,
    success: () => {
      console.log('Input submitted');
      getList();
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
      <FoodList restaurantsList={restaurants}/>
    </div>
  )
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);