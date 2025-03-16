import express from 'express';
import { urlencoded } from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(router)

app.use(express.static('./public'));
app.use(mainController.notFound);


app.listen(port, () => {
    console.log(`serveur sur http://localhost:${port}/`);
  });