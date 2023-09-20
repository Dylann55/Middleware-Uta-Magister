/* eslint-disable import/extensions */
import {
  express,
  userRoute,
  documentRoute,
  handleSpecializationRoute,
} from './student.modules.js';

const studentRoute = express.Router();
studentRoute.use('/user', userRoute);
studentRoute.use('/document', documentRoute);
studentRoute.use('/specialization', handleSpecializationRoute);

export default studentRoute;
