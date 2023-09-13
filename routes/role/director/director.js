/* eslint-disable import/extensions */
import {
  express,
  userRoute,
  roleHasUserRoute,
} from './director.modules.js';

const directorRoute = express.Router();
directorRoute.use('/user', userRoute);
directorRoute.use('/roleHasUser', roleHasUserRoute);
export default directorRoute;
