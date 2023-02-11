import React from "react";

const FoodList = (props) => {

  const images = {
    American: `<img src="https://i.insider.com/51d441c469beddf06e000000?width=600&format=jpeg&auto=webp" alt="Picture of Donut Burger" style="width:150px;height:150px;"></img>`,
    Bakery: `<img src="https://media.timeout.com/images/105899032/1372/772/image.jpg" alt="Picture of Bakery Items" style="width:150px;height:150px;"></img>`,
    BBQ: `<img src="https://onmilwaukee.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1U5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f8c18bb81730de79780a9663b36c60e535079acd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hSeVpYTnBlbVZmZEc5ZmJHbHRhWFJiQjJrQ1FBWnBBckFFIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1201dd735c5f821797e3a40ecc951b7e0d9cadda/123921906_5262789153746922_3019193407213004172_n.jpeg" alt="Picture of BBQ Platter" style="width:150px;height:150px;"></img>`,
    Chinese: `<img src="https://restaurantclicks.com/wp-content/uploads/2022/04/chinese-food-dishes.jpg" alt="Picture of Chinese Food" style="width:150px;height:150px;"></img>`,
    Dessert: `<img src="https://realfood.tesco.com/media/images/1400x919-SweetPlatter-8cfca3e7-4973-4cc6-b3d1-d36b65c1124d-0-1400x919.jpg" alt="Picture of Dessert Platter" style="width:150px;height:150px;"></img>`,
    French: `<img src="https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/09/iStock-119483507.jpg?fit=3456%2C2304&ssl=1" alt="Image of Ratatouille" style="width:150px;height:150px;"></img>`,
    Italian: `<img src="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg" alt="Image of Italian Food" style="width:150px;height:150px;"></img>`,
    Japanese: `<img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956" alt="Picture of Sushi" style="width:150px;height:150px;"></img>`,
    Mediterranean: `<img src="https://d1ralsognjng37.cloudfront.net/6a722b53-9948-47c8-b819-eb84bb4828b0.jpeg" alt="Picture of Mediterranean Food" style="width:150px;height:150px;"></img>`,
    Mexican: `<img src="https://www.findhomeaway.com/files/blog/202109201832446148d3cc4df40.jpg" alt="Picture of Mexican Food" style="width:150px;height:150px;"></img>`,
    Seafood: `<img src="https://thumb.spokesman.com/MDSbq9tvmbIc8ksIU7M9PEqI38U=/2500x2500/smart/media.spokesman.com/photos/2009/05/20/food20_lobster_05-20-2009_OTG4EUT.jpg" alt="Picture of Lobster and Shrimp" style="width:150px;height:150px;"></img>`,
    Thai: `<img src="http://img1.wsimg.com/isteam/ip/65df1eaf-2fb6-4eb5-9305-5da4b5726473/Menu%20Collage%202020-0001.jpg" alt="Picture of Thai Food" style="width:150px;height:150px;"></img>`
  }

  return (
    <div>
      <h3>Here are your top Restaurants!</h3>
      {/* <button onClick={()=>{props.onSubmit('/rating')}}>Sort By Review</button> */}
      <button onClick={()=>{props.sorting('rating')}}>Sort By Review</button>
      <button onClick={()=>{props.sorting('visits')}}>Sort By Visits</button>
      {/* <button onClick={()=>{props.onSubmit('/visits')}}>Sort By Visits</button> */}
      {props.restaurantsList.slice().reverse().map((restaurant) => {
      return (
        <div className="restaurantContainer">
          <div key={restaurant._id} className="restaurantInfo">
            <div id="restaurantName">{restaurant.restaurant}</div>
            <div>Type of Food: {restaurant.foodType}</div>
            <div>Your Review: {restaurant.rating.toFixed(2)}</div>
            <div>Times Visited: {restaurant.visits}</div>
          </div>
            <div className="image" dangerouslySetInnerHTML={{__html: images[restaurant.foodType]}}></div>
        </div>
      )
      })}
    </div>
  )
}

export default FoodList;