/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, questionRoute, rubricHasQuestionRoute, rubricRoute,
} from './handleRubricModules.js';

const handleRubricRoute = express.Router();
handleRubricRoute.use('/rubric', rubricRoute);
handleRubricRoute.use('/question', questionRoute);
handleRubricRoute.use('/rubricHasQuestion', rubricHasQuestionRoute);

export default handleRubricRoute;
