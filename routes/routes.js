/* eslint-disable import/extensions */
import {
  express, authRoute, sysadminRoute, testRoute, dencryptObject, validateToken, validateAccess, verifyAdmin,
} from './routes.modules.js';

const routes = express.Router();
routes.use('/auth', authRoute);
routes.use('/sysadmin', validateToken, dencryptObject, validateAccess, verifyAdmin, sysadminRoute);
routes.use('/test', testRoute);
export default routes;
