/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listSemester, createSemester, updateSemester, deleteSemester, validateArraySemesterID, validateSemesterID, validateStartDate, validateFinishDate,
} from './semesterModules.js';

const semesterRoute = express.Router();

semesterRoute.route('/')
  .get(listSemester)
  .post(validateStartDate, validateFinishDate, createSemester)
  .put(validateSemesterID, validateStartDate, validateFinishDate, updateSemester)
  .delete(validateArraySemesterID, deleteSemester);

export default semesterRoute;
