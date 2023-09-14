/* eslint-disable import/extensions */
import {
  express, directorRoute, mandatedRoute, verifyDirector, verifyMandated,
} from './role.modules.js';

const roleRoute = express.Router();
roleRoute.use('/director', verifyDirector, directorRoute);
roleRoute.use('/mandated', verifyMandated, mandatedRoute);
export default roleRoute;
