/* eslint-disable import/extensions */
import {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
  documentRoute,
  handleTitleRoute,
} from './director.modules.js';

const directorRoute = express.Router();
directorRoute.use('/roleAssignment', validateAllowedRoles, roleAssignmentRoute);
directorRoute.use('/document', documentRoute);
directorRoute.use('/handleTitle', handleTitleRoute);
export default directorRoute;
