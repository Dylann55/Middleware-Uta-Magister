/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, handleFileUpload, listTitle, listRoleHasTitle, createRoleHasTitle, updateRoleHasTitle, deleteRoleHasTitle, validateUserID, validateTitleID, validateRoleHasTitleID, validateArrayRoleHasTitleID,
} from './roleHasTitleModules.js';

const roleHasTitleRoute = express.Router();

roleHasTitleRoute.get('/title', listTitle);

roleHasTitleRoute.route('/')
  .get(validateUserID, listRoleHasTitle)
  .post(validateUserID, validateTitleID, handleFileUpload, createRoleHasTitle)
  .put(validateRoleHasTitleID, validateTitleID, updateRoleHasTitle)
  .delete(validateArrayRoleHasTitleID, deleteRoleHasTitle);

export default roleHasTitleRoute;
