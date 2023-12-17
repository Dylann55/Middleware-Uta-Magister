/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listEvaluate, listSpecializationHasAcademic, validateSpecializationHasSemesterID, validateStageID,
} from './evaluate.modules.js';

const evaluateRoute = express.Router();

evaluateRoute.get('/specializationHasAcademic', validateSpecializationHasSemesterID, listSpecializationHasAcademic);

evaluateRoute.route('/')
  .get(validateStageID, validateSpecializationHasSemesterID, listEvaluate);

export default evaluateRoute;
