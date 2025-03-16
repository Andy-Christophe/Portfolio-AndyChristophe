import express from 'express';
import { urlencoded } from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import mainController from './app/controllers/mainController.js';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));



app.use(router)

app.use(express.static('./public'));
app.use(mainController.notFound);


app.listen(port, () => {
    console.log(`serveur sur http://localhost:${port}/`);
  });