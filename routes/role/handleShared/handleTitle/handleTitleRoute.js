/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, titleRoute, userHasTitleRoute,
} from './handleTitleModules.js';

const handleTitleRoute = express.Router();

handleTitleRoute.use('/title', titleRoute);
handleTitleRoute.use('/userHasTitle', userHasTitleRoute);

export default handleTitleRoute;
