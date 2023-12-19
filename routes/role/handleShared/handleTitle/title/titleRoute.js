/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listType, listUniversity, listTitle, createTitle, updateTitle, deleteTitle, validateTitleID, validateArrayTitleID, validateName, validateTypeID, validateUniversityID, validateDepartamentTitle,
} from './titleModules.js';

const titleRoute = express.Router();

titleRoute.get('/type', listType);
titleRoute.get('/university', listUniversity);

titleRoute.route('/')
  .get(listTitle)
  .post(validateName, validateUniversityID, validateTypeID, validateDepartamentTitle, createTitle)
  .put(validateTitleID, validateName, validateUniversityID, validateTypeID, validateDepartamentTitle, updateTitle)
  .delete(validateArrayTitleID, deleteTitle);

export default titleRoute;
