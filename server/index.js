const {findRestaurant: findRestaurant} = require ('../database/index');
const {addRestaurant: addRestaurant} = require ('../database/index');
const {updateRestaurant: updateRestaurant} = require ('../database/index');
const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,'../client/dist')))
app.use(express.json());

app.post('/restaurant', (req, res) => {
  findRestaurant({restaurant: req.body.name})
  .then((data) => {
    if (data.length) {
      data.newRating = Number(req.body.rating);
      updateRestaurant(data);
    } else {
      addRestaurant(req.body);
    }
  })
  .then(()=>{res.sendStatus(200)})
  .catch((err)=>{
    console.log('This is the error:  ', err)
    res.sendStatus(500);
  });
});

app.get('/restaurant', (req, res) => {
  findRestaurant()
  .then((data) => {
    res.send(data);
  })
});


app.listen(port, () => {
  console.log(`listening to port ${port}`);
})
