/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, createRubricHasQuestion, updateRubricHasQuestion, deleleRubricHasQuestion, validateRubricID, validateArrayRubricHasQuestionID, validateArrayData, validateRubricHasQuestionArray,
} from './rubricHasQuestionModules.js';

const rubricHasQuestionRoute = express.Router();

rubricHasQuestionRoute.route('/')
  .post(validateArrayData, createRubricHasQuestion)
  .put(validateRubricHasQuestionArray, updateRubricHasQuestion)
  .delete(validateArrayRubricHasQuestionID, validateRubricID, deleleRubricHasQuestion);
export default rubricHasQuestionRoute;
