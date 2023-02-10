const {findRestaurant: findRestaurant} = require ('../database/index');
const {addRestaurant: addRestaurant} = require ('../database/index');



const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,'../client/dist')))
app.use(express.json());

app.post('/restaurant', (req, res) => {
  console.log(req.body);
  findRestaurant({restaurant: req.body.username})
  .then((data) => {
    if (data) {

    } else {
      return addRestaurant(req.body);
    }
  })
  .then(()=>{res.sendStatus(200)})
  .catch(()=>{res.sendStatus(500)});
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
