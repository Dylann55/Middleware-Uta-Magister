/* eslint-disable import/extensions */
import {
  express,
  specializationHasUserRoute,
  specializationHasSemesterRoute,
  evaluateRoute,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.use('/specializationHasUser', specializationHasUserRoute);
handleSpecializationRoute.use('/specializationHasSemester', specializationHasSemesterRoute);
handleSpecializationRoute.use('/evaluate', evaluateRoute);
export default handleSpecializationRoute;
