import express from 'express';
import { urlencoded } from 'express';
import * as dotenv from 'dotenv';
import router from './app/router.js';
import mainController from './app/controllers/mainController.js';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT;
const app = express();

// on configure le chemin vers vers le dossier des vues
app.set('views', __dirname + '/app/views/');
// on configure le moteur de template
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));



app.use(router)

app.use(express.static('./public'));
app.use(mainController.notFound);


app.listen(port, () => {
    console.log(`serveur sur http://localhost:${port}/`);
  });