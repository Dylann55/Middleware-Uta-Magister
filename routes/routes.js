import { express, authRoute, validateToken, validateAccess, verifyAdmin, sysadminRoute } from './routes.modules.js';

const routes = express.Router();
routes.use('/auth', authRoute);
routes.use('/sysadmin', validateToken, validateAccess, verifyAdmin, sysadminRoute);
export default routes;