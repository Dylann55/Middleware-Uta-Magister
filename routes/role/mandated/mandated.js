/* eslint-disable import/extensions */
import {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
} from './mandated.modules.js';

const mandatedRoute = express.Router();
mandatedRoute.use('/roleAssignment', validateAllowedRoles, roleAssignmentRoute);
export default mandatedRoute;
