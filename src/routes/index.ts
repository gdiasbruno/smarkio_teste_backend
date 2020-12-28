import { Router } from 'express';

import commentsRouter from './comments.routes';
import ibmRouter from './ibm.routes';

const routes = Router();

routes.use('/', commentsRouter);
routes.use('/ibm', ibmRouter);

export default routes;
