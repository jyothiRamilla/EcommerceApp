const express = require('express');
const app = express();
const cartRoute = express.Router();

// Cart model
let Cart = require('../models/Cart');

// Add Cart
cartRoute.route('/create').post((req, res, next) => {
  Cart.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Carts
cartRoute.route('/').get((req, res) => {
  Cart.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Cart
cartRoute.route('/read/:id').get((req, res) => {
  Cart.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Cart
cartRoute.route('/update/:id').put((req, res, next) => {
  Cart.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Cart
cartRoute.route('/delete/:id').delete((req, res, next) => {
  Cart.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cartRoute;