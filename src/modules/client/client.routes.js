import { Router } from 'express';
import * as ClientController from './client.controller';

const routes = new Router();

routes.post('', ClientController.create);
routes.put('', ClientController.update);
routes.get('/:id', ClientController.getById);
routes.get('', ClientController.search);

export default routes;