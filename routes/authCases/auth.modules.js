import express from 'express';
import signup from '../authCases/signup/signup.js';
import signin from '../authCases/signin/signin.js';
import signinWithGoogle from './signinWithGoogle/signinWithGoogle.js';
import recoverPassword from './recoverPassword/recoverPassword.js';
import refreshToken from './refreshToken/refreshToken.js';
import signinTest from './signinTest/signinTest.js';

import validateSignup from '../../validations/validateSignup/validateSignup.js';
import validateSignin from '../../validations/validateSignin/validateSignin.js';
import validateSaveUser from '../../validations/validateSaveUser/validateSaveUser.js';
import validateRefreshToken from '../../validations/validateRefreshToken/validateRefreshToken.js';

import validateEmail from '../../validations/user/validateEmail/validateEmail.js';
import validatePassword from '../../validations/user/validatePassword/validatePassword.js';

import validateToken from "../../token/validateToken/validateToken.js";

export {
    express,
    signin,
    signup,
    signinWithGoogle,
    validateToken,
    recoverPassword,
    refreshToken,
    signinTest,

    validateSignin,
    validateSignup,
    validateSaveUser,
    validateRefreshToken,

    validateEmail,
    validatePassword
};