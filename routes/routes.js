/* eslint-disable import/extensions */
import {
  express, authRoute, sysadminRoute, testRoute, validateToken, validateAccess, verifyAdmin, decryptAccess_Token,
} from './routes.modules.js';

const routes = express.Router();
routes.use('/auth', authRoute);
routes.use('/sysadmin', validateToken, decryptAccess_Token, validateAccess, verifyAdmin, sysadminRoute);
routes.use('/test', testRoute);
export default routes;
