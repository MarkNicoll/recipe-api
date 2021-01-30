import dotenv from 'dotenv';
import express from 'express';
import router from './routes.js';

dotenv.config();
const app = express()

app.use('/recipeapi/', router)

app.listen(8000, 'localhost', function (err) {
    console.log('Listening...')
    if (err) {
      console.log(err);
      return;
    }
  })
