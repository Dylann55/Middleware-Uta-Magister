/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, titleRoute, roleHasTitleRoute,
} from './handleTitleModules.js';

const handleTitleRoute = express.Router();

handleTitleRoute.use('/title', titleRoute);
handleTitleRoute.use('/roleHasTitle', roleHasTitleRoute);

export default handleTitleRoute;
