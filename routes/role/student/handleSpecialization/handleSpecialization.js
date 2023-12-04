/* eslint-disable import/extensions */
import {
  express,
  specializationHasUserRoute,
  evaluateRoute,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.use('/specializationHasUser', specializationHasUserRoute);
handleSpecializationRoute.use('/evaluate', evaluateRoute);
export default handleSpecializationRoute;
