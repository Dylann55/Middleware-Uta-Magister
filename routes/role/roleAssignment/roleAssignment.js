/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import {
  express,
  userRoute,
  roleHasUserRoute,
  importUsers,
  documentRoute,
} from './roleAssignment.modules.js';

const roleAssignmentRoute = express.Router();
roleAssignmentRoute.use('/user', userRoute);
roleAssignmentRoute.use('/roleHasUser', roleHasUserRoute);
roleAssignmentRoute.use('/importUsers', importUsers);
roleAssignmentRoute.use('/document', documentRoute);
export default roleAssignmentRoute;
