/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listEvaluate, listPreliminaryProjectEvaluation, listThesisEvaluation, validateSpecializationHasSemesterID, validateStageID,
} from './evaluate.modules.js';

const evaluateRoute = express.Router();

evaluateRoute.get('/preliminaryProjectEvaluation', validateSpecializationHasSemesterID, listPreliminaryProjectEvaluation);
evaluateRoute.get('/thesisEvaluation', validateSpecializationHasSemesterID, listThesisEvaluation);

evaluateRoute.route('/')
  .get(validateStageID, validateSpecializationHasSemesterID, listEvaluate);

export default evaluateRoute;
