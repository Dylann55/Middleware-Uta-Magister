/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import express from 'express';
import signin from './signin/signin.js';
import signinWithGoogle from './signinWithGoogle/signinWithGoogle.js';
import recoverPassword from './recoverPassword/recoverPassword.js';
import refreshToken from './refreshToken/refreshToken.js';
import signinTest from './signinTest/signinTest.js';
import changePassword from './changePassword/changePassword.js';

import { handleAuth } from './handleAuth/handleAuth.js';
import validateToken from '../../token/validateToken/validateToken.js';
import validateRefreshToken from '../../validations/auth/validateRefreshToken/validateRefreshToken.js';
import validateEmail from '../../validations/auth/validateEmail/validateEmail.js';
import validatePassword from '../../validations/auth/validatePassword/validatePassword.js';
import validateAccessToken from '../../validations/auth/validateAccess/validateAccess.js';

export {
  express,
  signin,
  signinWithGoogle,
  validateToken,
  recoverPassword,
  changePassword,
  refreshToken,
  signinTest,
  handleAuth,
  validateRefreshToken,
  validateEmail,
  validatePassword,
  validateAccessToken,
};
