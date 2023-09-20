/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listUserByUserID, updateUser, updateEmail, updatePassword, validatePassword, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone,
} from './userModules.js';

const userRoute = express.Router();

userRoute.put('/updateEmail', validateEmail, updateEmail);
userRoute.put('/updatePassword', validatePassword, updatePassword);

userRoute.route('/')
  .get(listUserByUserID)
  .put(validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validatePhone, updateUser);
export default userRoute;
