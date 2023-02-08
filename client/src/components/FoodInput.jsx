import React from "react";

const FoodInput = () => {
  return (
    <form>
      <div>Insert Restaurant Here:  <input type="text"></input></div>
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
          <option>Chinese</option>
          <option>Mexican</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>BBQ</option>
          <option>Bakery</option>
          <option>Dessert</option>
          <option>Ice Cream</option>
          <option>Middle Eastern</option>
          <option>Thai</option>
          <option>Puerto Rican</option>
        </select>
      </div>
      <div><button> Insert Experience </button></div>
    </form>
  )
}

export default FoodInput;