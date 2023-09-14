/* eslint-disable no-prototype-builtins */

const validateAllowedRoles = [
  (req, res, next) => {
    if (!req.body.hasOwnProperty('roleIDs')) {
      const allowedRolesString = process.env.ALLOWED_ROLES_DIRECTOR;
      const allowedRoles = allowedRolesString.split(',').map(Number);
      req.body.allowedRoles = allowedRoles;
      req.body.table = 'roleshasuser';
    }
    next();
  },
];

export default validateAllowedRoles;
