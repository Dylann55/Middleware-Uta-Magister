/* eslint-disable import/extensions */
import express from 'express';
import verifyAdmin from '../../../verify/verifyAdmin/verifyAdmin.js';
import createUser from './createUser/createUser.js';
import listUser from './listUser/listUser.js';
import updateUser from './updateUser/updateUser.js';
import deleteUser from './deleteUser/deleteUser.js';

import validateAccess from '../../../validations/auth/validateAccess/validateAccess.js';

import validateUserid from '../../../validations/student/validateUserid/validateUserid.js';
import validateArrayUserID from '../../../validations/student/validateArrayUserID/validateArrayUserID.js';
import validateRut from '../../../validations/student/validateRut/validateRut.js';
import validateFirstName from '../../../validations/student/validateFirstName/validateFirstName.js';
import validateSecondName from '../../../validations/student/validateSecondName/validateSecondName.js';
import validateSurnameM from '../../../validations/student/validateSurnameM/validateSurnameM.js';
import validateSurnameF from '../../../validations/student/validateSurnameF/validateSurnameF.js';
import validateSex from '../../../validations/student/validateSex/validateSex.js';
import validateStateCivil from '../../../validations/student/validateStateCivil/validateStateCivil.js';
import validateBirthday from '../../../validations/student/validateBirthday/validateBirthday.js';
import validateAddress from '../../../validations/student/validateAddress/validateAddress.js';
import validateEmail from '../../../validations/student/validateEmail/validateEmail.js';
import validatePhone from '../../../validations/student/validatePhone/validatePhone.js';

export {
  express,
  verifyAdmin,
  createUser,
  listUser,
  updateUser,
  deleteUser,
  validateAccess,
  validateArrayUserID,
  validateUserid,
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
};
