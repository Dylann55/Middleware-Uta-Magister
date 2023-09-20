/* eslint-disable import/extensions */
import {
  express,
  handleSpecializationRoute,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/specialization', handleSpecializationRoute);
export default academicRoute;
