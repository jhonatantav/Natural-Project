import express from 'express'

import PointsController from './controllers/pointsControllers';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();
const pointsController = new PointsController();
const itemscontroller = new ItemsController();


routes.get('/items', itemscontroller.index);

routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;