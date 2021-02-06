import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes.js';

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use('/recipeapi/', router);

app.listen(process.env.PORT, function (err) {
    console.log('Listening...')
    if (err) {
      console.log(err);
      return;
    }
  })
