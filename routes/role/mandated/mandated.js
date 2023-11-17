/* eslint-disable import/extensions */
import {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
  handleSpecializationRoute,
  documentRoute,
  handleTitleRoute,
  semesterRoute,
} from './mandated.modules.js';

const mandatedRoute = express.Router();
mandatedRoute.use('/roleAssignment', validateAllowedRoles, roleAssignmentRoute);
mandatedRoute.use('/specialization', handleSpecializationRoute);
mandatedRoute.use('/document', documentRoute);
mandatedRoute.use('/handleTitle', handleTitleRoute);
mandatedRoute.use('/semester', semesterRoute);
export default mandatedRoute;
