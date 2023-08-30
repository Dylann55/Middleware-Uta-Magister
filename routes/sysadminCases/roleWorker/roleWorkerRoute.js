import { express, createRoleWorker, listAllRoleWorker, listRoleWorker, listAllRoles, deleteRoleWorker, deleteAllRoleWorker, inviteWorker, validateEmail, validateUserID, validateWorkerID, validateRoleID } from './roleWorkerModules.js';

const roleWorkerRoute = express.Router();

roleWorkerRoute.get('/rolesWorker', listAllRoleWorker);
roleWorkerRoute.get('/roles', listAllRoles);
roleWorkerRoute.post('/inviteWorker', validateEmail, inviteWorker);
roleWorkerRoute.delete('/deleteWorker', validateUserID, deleteAllRoleWorker);

roleWorkerRoute.route('/')
    .get(validateWorkerID, listRoleWorker)
    .post(validateWorkerID, validateRoleID, createRoleWorker)
    .delete(validateWorkerID, validateRoleID, deleteRoleWorker);
export default roleWorkerRoute;
