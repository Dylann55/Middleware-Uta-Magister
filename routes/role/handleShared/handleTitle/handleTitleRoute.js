/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, titleRoute, userHasTitleRoute, bodyAcademicRoute,
} from './handleTitleModules.js';

const handleTitleRoute = express.Router();

handleTitleRoute.use('/title', titleRoute);
handleTitleRoute.use('/userHasTitle', userHasTitleRoute);
handleTitleRoute.use('bodyAcademic', bodyAcademicRoute);

export default handleTitleRoute;
