/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, createUserAuth, createUser, createRoleHasNewUser, listUser, updateUser, updateEmail, updatePassword, deleteUser, validateArrayRoleID, validatePassword, validateArrayID, validateUserID, validateID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone,
} from './userModules.js';

const userRoute = express.Router();

userRoute.put('/updateEmail', validateID, validateEmail, updateEmail);
userRoute.put('/updatePassword', validateID, validatePassword, updatePassword);

userRoute.route('/')
  .get(listUser)
  .post(validateArrayRoleID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, createUserAuth, createUser, createRoleHasNewUser)
  .put(validateUserID, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validatePhone, updateUser)
  .delete(validateArrayID, deleteUser);
export default userRoute;