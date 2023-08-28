import { express, createUser, listUser, updateUser, updateUserPassword, deleteUser,validateArrayUserID, validateName, validateLastname, validateUserid, validatePassword, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, } from './userModules.js';

const userRoute = express.Router();

userRoute.route('/')
    .get(listUser)
    .post(validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, createUser)
    .put(validateUserid, validateRut, validateFirstName, validateSecondName, validateSurnameM, validateSurnameF, validateSex, validateStateCivil, validateBirthday, validateAddress, validateEmail, validatePhone, updateUser)
    .delete(validateArrayUserID, deleteUser);

userRoute.post('/inviteAttendant', validateEmail, validatePassword,)
userRoute.put('/updatePassword', validateUserid, validatePassword, updateUserPassword);

export default userRoute;