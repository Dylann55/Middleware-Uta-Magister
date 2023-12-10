/* eslint-disable import/extensions */
import {
  express,
  firstStageRoute,
  secondStageRoute,
  listSemester,
  handleRubricRoute,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/firstStage', firstStageRoute);
academicRoute.use('/secondStage', secondStageRoute);
academicRoute.get('/semester', listSemester);
academicRoute.use('/handleRubric', handleRubricRoute);
export default academicRoute;
