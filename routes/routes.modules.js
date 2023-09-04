/* eslint-disable import/extensions */
import express from 'express';
import authRoute from './authCases/auth.route.js';
import sysadminRoute from './sysadminCases/sysadmin.route.js';
import testRoute from './test/test.route.js';

import validateToken from '../token/validateToken/validateToken.js';
import validateAccess from '../validations/auth/validateAccess/validateAccess.js';
import verifyAdmin from '../verify/verifyAdmin/verifyAdmin.js';
import decryptAccess_Token from '../crypto/decryptAccess_Token/decryptAccess_Token.js';

export {
  express,
  authRoute,
  sysadminRoute,
  testRoute,
  validateToken,
  validateAccess,
  verifyAdmin,
  decryptAccess_Token,
};
