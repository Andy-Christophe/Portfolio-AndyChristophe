import express from 'express';
import mainController from './controllers/mainController.js';
const router = express.Router();


router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);










export default router;