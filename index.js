const express = require ('express');
const route = require('./route');
require('dotenv').config()
const app = express()
const port = 3000;

app.use(route)
  app.listen(port,(req,res)=>{
    console.log('ok');
  })