/* eslint-disable import/extensions */
import {
  express,
  firstStageRoute,
  secondStageRoute,
  listSemester,
  handleRubric,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/firstStage', firstStageRoute);
academicRoute.use('/secondStage', secondStageRoute);
academicRoute.get('/semester', listSemester);
academicRoute.get('/handleRubric', handleRubric);
export default academicRoute;
