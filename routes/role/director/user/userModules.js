/* eslint-disable import/extensions */
import express from 'express';
import createUser from './createUser/createUser.js';
import createUserAuth from './createUserAuth/createUserAuth.js';
import createRoleHasNewUser from '../roleHasWorker/createRoleHasNewUser/createRoleHasNewUser.js';
import listUser from './listUser/listUser.js';
import updateUser from './updateUser/updateUser.js';
import updateEmail from './updateEmail/updateEmail.js';
import updatePassword from './updatePassword/updatePassword.js';
import deleteUser from './deleteUser/deleteUser.js';

import validateArrayRoleID from '../../../../validations/role/validateArrayRoleID/validateArrayRoleID.js';
import validatePassword from '../../../../validations/auth/validatePassword/validatePassword.js';

import validateArrayID from '../../../../validations/user/validateArrayID/validateArrayID.js';
import validateUserID from '../../../../validations/user/validateUserID/validateUserID.js';
import validateID from '../../../../validations/user/validateID/validateID.js';
import validateRut from '../../../../validations/user/validateRut/validateRut.js';
import validateFirstName from '../../../../validations/user/validateFirstName/validateFirstName.js';
import validateSecondName from '../../../../validations/user/validateSecondName/validateSecondName.js';
import validateSurnameM from '../../../../validations/user/validateSurnameM/validateSurnameM.js';
import validateSurnameF from '../../../../validations/user/validateSurnameF/validateSurnameF.js';
import validateSex from '../../../../validations/user/validateSex/validateSex.js';
import validateStateCivil from '../../../../validations/user/validateStateCivil/validateStateCivil.js';
import validateBirthday from '../../../../validations/user/validateBirthday/validateBirthday.js';
import validateAddress from '../../../../validations/user/validateAddress/validateAddress.js';
import validateEmail from '../../../../validations/user/validateEmail/validateEmail.js';
import validatePhone from '../../../../validations/user/validatePhone/validatePhone.js';

export {
  express,
  createUserAuth,
  createUser,
  createRoleHasNewUser,
  listUser,
  updateUser,
  updateEmail,
  updatePassword,
  deleteUser,
  validateArrayRoleID,
  validatePassword,
  validateArrayID,
  validateUserID,
  validateID,
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
