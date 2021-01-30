import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes.js';

dotenv.config();
const app = express()

app.use(cors());
app.use('/recipeapi/', router);

app.listen(process.env.PORT || 'localhost', 3000, function (err) {
    console.log(process.env.PORT)
    console.log('Listening...')
    if (err) {
      console.log(err);
      return;
    }
  })
