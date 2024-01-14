const express = require ('express');
require('dotenv').config()
const route = require('./route');

const app = express()
const port = 3000;

app.use(route)
  app.listen(port,(req,res)=>{
    console.log('ok');
  })