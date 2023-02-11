import React from "react";
import $ from 'jquery';

const FoodInput = ( {onSubmit} ) => {

  const { useState } = React;

  const [hasValues, setValue] = useState(false);

  const inputChecker = () => {
    if ($('#restaurantInput').val().length && $("input[type=radio][name=rating]:checked").val()) {
      setValue(true);
    } else {
      setValue(false);
    }
  }

  return (
    <div>
      <div>Insert Restaurant Here:  <input type="text" id="restaurantInput" onChange={inputChecker}></input></div>
      <div>
        <fieldset onClick={inputChecker}>
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
      <button onClick={onSubmit} disabled={!hasValues}> Insert Experience </button>
    </div>
  )
}

export default FoodInput;