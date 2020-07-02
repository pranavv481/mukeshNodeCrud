const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongourl } = require('./config/keys');
const Wish = require('./models/wish');

// mongoose.connect(mongourl).then(() => console.log('DB connected!'));

// mongoose.connection.on('error', function (err) {
//   console.log('The error is: ');
// });

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

//var data = ['code', 'sleep', 'eat'];

module.exports = (app) => {
  //get request
  app.get('/', (req, res) => {
    Wish.find({}).then((data) => {
      console.log(data);
      res.render('home', { wish: data });
    });
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });
  //post request
  app.post('/sent', (req, res) => {
    const Item = new Wish({
      wish: req.body.item,
    });
    Item.save()
      .then((data) => {
        console.log('saved');
        res.send(data);
      })
      .catch((err) => {
        throw err;
      });
    // console.log(req.body.item);
    // data.push(req.body.item);
    // res.send(data);
  });

  //delete request

  app.delete('/remove/:id', (req, res) => {
    Wish.findOneAndDelete({ wish: req.params.id }).then((data) => {
      console.log('deleted');
      res.send(data);
    });
    // data = data.map((item) => {
    //   if (item != req.params.id) {
    //     return item;
    //   }
    //   res.send(data);
    // });
  });
};
