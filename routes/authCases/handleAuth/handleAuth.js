/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import validateToken from '../../../token/validateToken/validateToken.js';
import dencryptObject from '../../../crypto/dencryptObject/dencryptObject.js';

export function handleAuth(req, res, next) {
  validateToken(req, res, () => {
    dencryptObject(req, res, next);
  });
}
