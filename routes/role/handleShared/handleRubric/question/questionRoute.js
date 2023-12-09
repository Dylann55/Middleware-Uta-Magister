/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listDefaultQuestion, listQuestion, createQuestion, updateQuestion, deleleQuestion, validateArrayQuestionID, validateQuestionID, validateQuestion,
} from './questionModules.js';

const questionRoute = express.Router();

questionRoute.get('/defaultQuestion', listDefaultQuestion);

questionRoute.route('/')
  .get(listQuestion)
  .post(validateQuestion, createQuestion)
  .put(validateQuestionID, validateQuestion, updateQuestion)
  .delete(validateArrayQuestionID, deleleQuestion);
export default questionRoute;
