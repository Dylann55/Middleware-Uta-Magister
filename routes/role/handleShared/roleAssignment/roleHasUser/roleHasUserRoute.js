/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import {
  express, createRoleHasUser, listRolesHasUser, listRoleHasUser, listAllRole, listAcademic, listStudent, deleteRoleHasUser, validateUserID, validateArrayRoleID,
} from './roleHasUserModules.js';

const roleHasUserRoute = express.Router();

roleHasUserRoute.get('/rolesHasUser', listRolesHasUser);
roleHasUserRoute.get('/roles', listAllRole);
roleHasUserRoute.get('/academic', listAcademic);
roleHasUserRoute.get('/student', listStudent);

roleHasUserRoute.route('/')
  .get(validateUserID, listRoleHasUser)
  .post(validateUserID, validateArrayRoleID, createRoleHasUser)
  .delete(validateUserID, validateArrayRoleID, deleteRoleHasUser);
export default roleHasUserRoute;
