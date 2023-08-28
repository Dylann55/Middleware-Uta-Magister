import express from 'express';
import verifyAdmin from '../../../verify/verifyAdmin/verifyAdmin.js';
import createUser from './createUser/createUser.js';
import listUser from './listUser/listUser.js';
import updateUser from './updateUser/updateUser.js';
import updateUserPassword from './updateUserPassword/updateUserPassword.js';
import deleteUser from './deleteUser/deleteUser.js';

import validateAccess from '../../../validations/validateAccess/validateAccess.js';
import validateName from '../../../validations/validateName/validateName.js';
import validateLastname from '../../../validations/validateLastname/validateLastname.js';
import validatePassword from '../../../validations/validatePassword/validatePassword.js';

import validateUserid from '../../../validations/student/validateUserid/validateUserid.js';
import validateArrayUserID from '../../../validations/student/validateArrayUserID/validateArrayUserID.js'
import validateRut from '../../../validations/student/validateRut/validateRut.js';
import validateFirstName from '../../../validations/student/validateFirstName/validateFirstName.js';
import validateSecondName from '../../../validations/student/validateSecondName/validateSecondName.js';
import validateSurnameM from '../../../validations/student/validateSurnameM/validateSurnameM.js';
import validateSurnameF from '../../../validations/student/validateSurnameF/validateSurnameF.js';
import validateSex from '../../../validations/student/validateSex/validateSex.js';
import validateStateCivil from '../../../validations/student/validateStateCivil/validateStateCivil.js';
import validateBirthday from '../../../validations/student/validateBirthday/validateBirthday.js'
import validateAddress from '../../../validations/student/validateAddress/validateAddress.js';
import validateEmail from '../../../validations/student/validateEmail/validateEmail.js';
import validatePhone from '../../../validations/student/validatePhone/validatePhone.js';

export {
    express,
    verifyAdmin,
    createUser,
    listUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    validateAccess,
    validateName,
    validateLastname,
    validateArrayUserID,
    validateUserid,
    validatePassword,
    validateRut,
    validateFirstName,
    validateSecondName,
    validateSurnameM,
    validateSurnameF,
    validateSex,
    validateStateCivil,
    validateBirthday,
    validateAddress,
    validateEmail,
    validatePhone,
}