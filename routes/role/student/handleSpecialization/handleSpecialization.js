/* eslint-disable import/extensions */
import {
  express,
  specializationHasUserRoute,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.use('/specializationHasUser', specializationHasUserRoute);
export default handleSpecializationRoute;
