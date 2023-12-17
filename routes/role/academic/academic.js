/* eslint-disable import/extensions */
import {
  express,
  firstStageRoute,
  secondStageRoute,
  listSemester,
  handleRubricRoute,
  evaluateRoute,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/firstStage', firstStageRoute);
academicRoute.use('/secondStage', secondStageRoute);
academicRoute.get('/semester', listSemester);
academicRoute.use('/evaluate', evaluateRoute);
academicRoute.use('/handleRubric', handleRubricRoute);
export default academicRoute;
