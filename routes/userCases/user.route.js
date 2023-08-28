import { express, dataRoute, companyRoute } from './user.Modules.js';

const userRoute = express.Router();

userRoute.use('/data', dataRoute);
userRoute.use('/companies', companyRoute);


export default userRoute;