/* eslint-disable max-len */
/* eslint-disable import/extensions */
import validateDepartamentTitle from '../../../../../validations/handleTitle/userHasTitle/validateYearTitle/validateYearTitle.js';
import {
  express, handleFileUpload, listTitle, listBodyAcademic, createUserHasTitle, createBodyAcademic, updateUserHasTitle, updateBodyAcademic, deleteUserHasTitle, validateUserID, validateTitleID, validateUserHasTitleID, validateArrayUserHasTitleID, validateYearTitle, validateTypeBond, validateBodyAcademicID,
} from './bodyAcademicModules.js';

const bodyAcademicRoute = express.Router();

bodyAcademicRoute.get('/title', listTitle);

bodyAcademicRoute.route('/')
  .get(validateUserID, listBodyAcademic)
  .post(validateUserID, validateTitleID, validateYearTitle, validateDepartamentTitle, validateTypeBond, handleFileUpload, createUserHasTitle, createBodyAcademic)
  .put(validateUserHasTitleID, validateTitleID, validateYearTitle, validateBodyAcademicID, validateDepartamentTitle, validateTypeBond, updateUserHasTitle, updateBodyAcademic)
  .delete(validateArrayUserHasTitleID, deleteUserHasTitle);

export default bodyAcademicRoute;
