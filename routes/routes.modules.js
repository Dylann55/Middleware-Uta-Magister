import express from 'express';
import authRoute from './authCases/auth.route.js';
import sysadminRoute from './sysadminCases/sysadmin.route.js';

import validateToken from "../token/validateToken/validateToken.js";
import validateAccess from '../validations/validateAccess/validateAccess.js';
import verifyAdmin from '../verify/verifyAdmin/verifyAdmin.js';

export {
    express,
    authRoute,
    sysadminRoute,
    validateToken,
    validateAccess,
    verifyAdmin,
}


