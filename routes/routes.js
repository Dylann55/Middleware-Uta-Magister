/* eslint-disable import/extensions */
import {
  express, authRoute, roleRoute, dencryptObject, validateToken, validateAccess,
} from './routes.modules.js';

const routes = express.Router();
routes.use('/auth', authRoute);
routes.use('/role', validateToken, dencryptObject, validateAccess, roleRoute);
export default routes;
