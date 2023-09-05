/* eslint-disable import/extensions */
import express from 'express';
import authRoute from './authCases/auth.route.js';
import sysadminRoute from './sysadminCases/sysadmin.route.js';
import testRoute from './test/test.route.js';

import validateToken from '../token/validateToken/validateToken.js';
import validateAccess from '../validations/auth/validateAccess/validateAccess.js';
import verifyAdmin from '../verify/verifyAdmin/verifyAdmin.js';
import dencryptObject from '../crypto/dencryptObject/dencryptObject.js';

export {
  express,
  authRoute,
  sysadminRoute,
  testRoute,
  dencryptObject,
  validateToken,
  validateAccess,
  verifyAdmin,
};
