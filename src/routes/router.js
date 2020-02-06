const express = require('express');
const routers = express.Router();
const uuid = require('uuid/v1');

const productsRoute = require('./products/productsRoutes');
const notFoundRoute = require('./notFound/404');
const usersRoute = require('./users/users');
const findProductById = require('./products/productById');
const products = require('./products/products');
const findUserById = require('./users/userById');
const ordersRoute = require('./orders/orders');
const orderById = require('./orders/orderById')

routers
.get('/products/:id', findProductById) 
.put('/products/:id', findProductById) 
.get('/products/*', productsRoute)
.get('/products', products)

.post('/orders', ordersRoute)
.get('/orders/:id', orderById)

.put('/user/:id', findUserById)
.post('/users', usersRoute)
.get('/users/:id', findUserById)

.get('*', notFoundRoute)

module.exports = routers;