/* eslint-disable import/extensions */
import {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
} from './director.modules.js';

const directorRoute = express.Router();
directorRoute.use('/roleAssignment', validateAllowedRoles, roleAssignmentRoute);
export default directorRoute;
