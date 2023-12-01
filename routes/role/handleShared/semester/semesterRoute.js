/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listSemester, createSemester, deleteSemesterBucket, updateSemester, deleteSemester, createSemesterBucket, validateArraySemesterID, validateSemesterID, validateYear, validateSemesterNumber, validateStartDate, validateFinishDate,
} from './semesterModules.js';

const semesterRoute = express.Router();

semesterRoute.route('/')
  .get(listSemester)
  .post(validateYear, validateSemesterNumber, validateStartDate, validateFinishDate, createSemester, createSemesterBucket)
  .put(validateYear, validateSemesterNumber, validateSemesterID, validateStartDate, validateFinishDate, updateSemester)
  .delete(validateArraySemesterID, deleteSemester, deleteSemesterBucket);

export default semesterRoute;
