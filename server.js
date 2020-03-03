const express = require('express')();
const db = require('./dbConnection');
const userRoutes = require('./user/routes');
const productRoutes = require('./product/routes');
const port = process.env.PORT || 8080;
require('dotenv').config();

/**
 * @middlewares - All the middlewares
 */
require('./middlewares');

/**
 * @description - All Api routes
 * @routes [GET, POST, DELETE, PUT]
 * @version 1
 */
express.use('/api/v1/user', userRoutes);
express.use('/api/v1/product', productRoutes);

// DB connection & entry point to server
db.connectToDb()
  .then(() =>
    express.listen(port, () => {
      console.log('Server is running on PORT:' + port);
      console.log('Database connected.');
    })
  )
  .catch(err => {
    console.log('Error while starting the server: ', err);
  });
