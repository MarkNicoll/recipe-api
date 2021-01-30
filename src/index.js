import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express()
const routes = require('./routes');

app.use('/recipeapi/', routes)

app.listen(8000, 'localhost', function (err) {
    console.log('Listening...')
    if (err) {
      console.log(err);
      return;
    }
  })
