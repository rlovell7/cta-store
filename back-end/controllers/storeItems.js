//import express
const express = require('express');

//create our controller
const storeItems = express.Router();

//get all items
storeItems.get('/', (req, res) => {
  res.send('get all items route');
});

// export
module.exports = storeItems;