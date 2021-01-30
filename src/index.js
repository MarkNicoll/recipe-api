import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express()

app.use(cors());
app.use('/recipeapi/', router);

app.listen(process.env.PORT || 3000, 'localhost', function (err) {
    console.log('Listening...')
    if (err) {
      console.log(err);
      return;
    }
  })
