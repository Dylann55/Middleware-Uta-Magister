/* eslint-disable import/extensions */
import {
  express, createUser, listUser, updateUser, deleteUser, validateArrayUserID, validateUserid, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone,
} from './userModules.js';

const userRoute = express.Router();

userRoute.route('/')
  .get(listUser)
  .post(validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, createUser)
  .put(validateUserid, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, updateUser)
  .delete(validateArrayUserID, deleteUser);

export default userRoute;
