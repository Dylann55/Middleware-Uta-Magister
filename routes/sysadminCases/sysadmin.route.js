/* eslint-disable import/extensions */
import { express, userRoute, roleWorkerRoute } from './sysadmin.modules.js';

const sysadminRoute = express.Router();

sysadminRoute.use('/user', userRoute);
sysadminRoute.use('/roleWorker', roleWorkerRoute);

export default sysadminRoute;
