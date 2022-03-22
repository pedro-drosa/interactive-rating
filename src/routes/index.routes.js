import { Router } from 'express';

import HomeController from '../controllers/HomeController.js';
import ResultController from '../controllers/ResultController.js';

const routes = Router();

const homeController = new HomeController();
const resultController = new ResultController();

routes.get('/', homeController.index);
routes.get('/result', resultController.index);

export default routes;
