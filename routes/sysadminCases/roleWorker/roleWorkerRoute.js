/* eslint-disable import/extensions */
import {
  express, createRoleWorker, listAllRoleWorker, listRoleWorker, listAllRoles, deleteRoleWorker, deleteAllRoleWorker, inviteWorker, validateEmail, validateArrayUserID, validateWorkerID, validateRoleID, validateArrayRoleID,
} from './roleWorkerModules.js';

const roleWorkerRoute = express.Router();

roleWorkerRoute.get('/rolesWorker', listAllRoleWorker);
roleWorkerRoute.get('/roles', listAllRoles);
roleWorkerRoute.post('/inviteWorker', validateEmail, inviteWorker);
roleWorkerRoute.delete('/deleteWorker', validateArrayUserID, deleteAllRoleWorker);

roleWorkerRoute.route('/')
  .get(validateWorkerID, listRoleWorker)
  .post(validateWorkerID, validateRoleID, createRoleWorker)
  .delete(validateWorkerID, validateArrayRoleID, deleteRoleWorker);
export default roleWorkerRoute;
