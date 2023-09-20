/* eslint-disable import/extensions */
import {
  express, directorRoute, mandatedRoute, academicRoute, studentRoute, verifyDirector, verifyMandated, verifyAcademic, verifyStudent,
} from './role.modules.js';

const roleRoute = express.Router();
roleRoute.use('/director', verifyDirector, directorRoute);
roleRoute.use('/mandated', verifyMandated, mandatedRoute);
roleRoute.use('/academic', verifyAcademic, academicRoute);
roleRoute.use('/student', verifyStudent, studentRoute);
export default roleRoute;
