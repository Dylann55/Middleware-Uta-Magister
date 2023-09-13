/* eslint-disable import/extensions */
import {
  express, directorRoute, verifyDirector,
} from './role.modules.js';

const roleRoute = express.Router();
roleRoute.use('/director', verifyDirector, directorRoute);
export default roleRoute;
