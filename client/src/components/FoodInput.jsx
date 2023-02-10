import React from "react";
import $ from 'jquery';

const FoodInput = ( {onSubmit} ) => {
  return (
    <div>
      <div>Insert Restaurant Here:  <input type="text" id="restaurantName"></input></div>
      <div>
        <fieldset>
          <legend>Rate Your Experience:</legend>
          <div>
            <input type="radio" name="rating" value="1"></input>
            <label htmlFor="one">Awful</label>
          </div>
          <div>
            <input type="radio" name="rating" value="2"></input>
            <label htmlFor="two">Bad</label>
          </div>
          <div>
            <input type="radio" name="rating" value="3"></input>
            <label htmlFor="three">Average</label>
          </div>
          <div>
            <input type="radio" name="rating" value="4"></input>
            <label htmlFor="four">Good</label>
          </div>
          <div>
            <input type="radio" name="rating" value="5"></input>
            <label htmlFor="five">Amazing</label>
          </div>
        </fieldset>
      </div>
      <div>
        Select Your Food Type:  <select id="foodType" name="foodType">
          <option>American</option>
          <option>Bakery</option>
          <option>BBQ</option>
          <option>Chinese</option>
          <option>Dessert</option>
          <option>Ice Cream</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Mexican</option>
          <option>Middle Eastern</option>
          <option>Puerto Rican</option>
          <option>Thai</option>
        </select>
      </div>
      <button onClick={onSubmit}> Insert Experience </button>
    </div>
  )
}

export default FoodInput;