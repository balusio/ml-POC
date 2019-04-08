/*
la estructura deberia sera lgo como: 
  1.- application general de entrada
  2.- Routing para los items
      2.1 controlador de datos y funciones para 
        2.1.1. búsqueda
        2.1.2. item
  3.- Helpers de configuracioón global

*/

const compression = require('compression');
const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config();


var whitelist = ['http://localhost:3000','http://localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  'Cache-Control': 'max-age=86400',
  "methods": "GET",
  'Access-Control-Allow-Headers': 'Authorization'
}
const authorizationTest = function(req, res, next) {
  console.log()
  if (!req.headers.authorization && req.headers.authorization!== process.env.AUTHOR_NAME + process.env.AUTHOR_LASTNAME) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  next();
};

app.disable('x-powered-by');
app.use(compression(),cors(corsOptions),authorizationTest,router);
app.listen(port, () => console.log(`Mercado Libre API-handler listening on port ${port}! \n greetings from @balusio :D `))