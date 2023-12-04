/* eslint-disable import/extensions */
import {
  express,
  firstStageRoute,
  secondStageRoute,
  listSemester,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/firstStage', firstStageRoute);
academicRoute.use('/secondStage', secondStageRoute);
academicRoute.get('/semester', listSemester);
export default academicRoute;
