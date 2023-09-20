/* eslint-disable import/extensions */
import express from 'express';
import listUserByUserID from '../../roleAssignment/user/listUserByUserID/listUserByUserID.js';
import updateUser from '../../roleAssignment/user/updateUser/updateUser.js';
import updateEmail from '../../roleAssignment/user/updateEmail/updateEmail.js';
import updatePassword from '../../roleAssignment/user/updatePassword/updatePassword.js';

import validateArrayRoleID from '../../../../validations/role/validateArrayRoleID/validateArrayRoleID.js';
import validatePassword from '../../../../validations/auth/validatePassword/validatePassword.js';

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
  listUserByUserID,
  updateUser,
  updateEmail,
  updatePassword,
  validateArrayRoleID,
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
};
