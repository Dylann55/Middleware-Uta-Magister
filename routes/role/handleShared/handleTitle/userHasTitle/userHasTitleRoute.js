/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, handleFileUpload, listTitle, listUserHasTitle, createUserHasTitle, updateUserHasTitle, deleteUserHasTitle, validateUserID, validateTitleID, validateUserHasTitleID, validateArrayUserHasTitleID,
} from './userHasTitleModules.js';

const userHasTitleRoute = express.Router();

userHasTitleRoute.get('/title', listTitle);

userHasTitleRoute.route('/')
  .get(validateUserID, listUserHasTitle)
  .post(validateUserID, validateTitleID, handleFileUpload, createUserHasTitle)
  .put(validateUserHasTitleID, validateTitleID, updateUserHasTitle)
  .delete(validateArrayUserHasTitleID, deleteUserHasTitle);

export default userHasTitleRoute;
