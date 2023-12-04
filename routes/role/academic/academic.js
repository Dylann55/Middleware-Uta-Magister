/* eslint-disable import/extensions */
import {
  express,
  firstStageRoute,
  secondStageRoute,
} from './academic.modules.js';

const academicRoute = express.Router();
academicRoute.use('/firstStage', firstStageRoute);
academicRoute.use('/secondStage', secondStageRoute);
export default academicRoute;
