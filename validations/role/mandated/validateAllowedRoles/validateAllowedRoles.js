/* eslint-disable no-prototype-builtins */
import { validationResult } from 'express-validator';

const validateAllowedRoles = [
  (req, res, next) => {
    const allowedRolesString = process.env.ALLOWED_ROLES_MANDATED;
    const allowedRoles = allowedRolesString.split(',').map(Number);
    if (!req.body.hasOwnProperty('roleIDs')) {
      req.body.allowedRoles = allowedRoles;
      req.body.table = 'roleshasusermandated';
      next();
      return;
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const roleIDs = req.body.roleIDs;
    const rolesNotAllowed = roleIDs.filter((role) => !allowedRoles.includes(role));

    if (rolesNotAllowed.length === 0) {
      next();
    } else {
      return res.status(400).json({
        error: 'Al menos un rol enviado no es válido.',
        rolesNotAllowed,
      });
    }
  },
];

export default validateAllowedRoles;
