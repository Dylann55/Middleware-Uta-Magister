/* eslint-disable import/extensions */
import express from 'express';
import signin from './signin/signin.js';
import signinWithGoogle from './signinWithGoogle/signinWithGoogle.js';
import recoverPassword from './recoverPassword/recoverPassword.js';
import refreshToken from './refreshToken/refreshToken.js';
import signinTest from './signinTest/signinTest.js';

import validateRefreshToken from '../../validations/auth/validateRefreshToken/validateRefreshToken.js';
import validateEmail from '../../validations/auth/validateEmail/validateEmail.js';
import validatePassword from '../../validations/auth/validatePassword/validatePassword.js';
import validateToken from '../../token/validateToken/validateToken.js';

import dencryptObject from '../../crypto/dencryptObject/dencryptObject.js';

export {
  express,
  signin,
  signinWithGoogle,
  validateToken,
  recoverPassword,
  refreshToken,
  signinTest,
  dencryptObject,
  validateRefreshToken,
  validateEmail,
  validatePassword,
};
