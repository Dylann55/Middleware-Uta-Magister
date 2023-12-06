/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listUser, listUserByUserID, createUserAuth, createUser, createRoleHasNewUser, updateUser, updateEmail, updatePassword, deleteUser, validateArrayRoleID, validatePassword, validateArrayID, validateUserID, validateID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, validatePhoneWork, validatePlaceWork, validateJob,
} from './userModules.js';

const userRoute = express.Router();

userRoute.put('/updateEmail', validateID, validateEmail, updateEmail);
userRoute.put('/updatePassword', validateID, validatePassword, updatePassword);
userRoute.get('/user', validateUserID, listUserByUserID);

userRoute.route('/')
  .get(listUser)
  .post(validateArrayRoleID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, validatePhoneWork, validatePlaceWork, validateJob, createUserAuth, createUser, createRoleHasNewUser)
  .put(validateUserID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validatePhone, validatePhoneWork, validatePlaceWork, validateJob, updateUser)
  .delete(validateArrayID, deleteUser);
export default userRoute;
