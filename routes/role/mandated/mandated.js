/* eslint-disable import/extensions */
import {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
  handleSpecializationRoute,
} from './mandated.modules.js';

const mandatedRoute = express.Router();
mandatedRoute.use('/roleAssignment', validateAllowedRoles, roleAssignmentRoute);
mandatedRoute.use('/specialization', handleSpecializationRoute);
export default mandatedRoute;
