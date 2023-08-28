import { express, userRoute } from "./sysadmin.modules.js";

const sysadminRoute = express.Router();

sysadminRoute.use('/user', userRoute);

export default sysadminRoute;
