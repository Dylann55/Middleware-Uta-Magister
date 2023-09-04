/* eslint-disable import/extensions */
import express from 'express';
import signup from './signup/signup.js';
import signin from './signin/signin.js';
import signinWithGoogle from './signinWithGoogle/signinWithGoogle.js';
import recoverPassword from './recoverPassword/recoverPassword.js';
import refreshToken from './refreshToken/refreshToken.js';
import signinTest from './signinTest/signinTest.js';

import validateRefreshToken from '../../validations/auth/validateRefreshToken/validateRefreshToken.js';
import validateEmail from '../../validations/user/validateEmail/validateEmail.js';
import validatePassword from '../../validations/user/validatePassword/validatePassword.js';
import validateToken from '../../token/validateToken/validateToken.js';

import decryptPassword from '../../crypto/decryptPassword/decryptPassword.js';
import decryptRefreshToken from '../../crypto/decryptRefreshToken/decryptRefreshToken.js';

export {
  express,
  signin,
  signup,
  signinWithGoogle,
  validateToken,
  recoverPassword,
  refreshToken,
  signinTest,
  decryptPassword,
  decryptRefreshToken,
  validateRefreshToken,
  validateEmail,
  validatePassword,
};
