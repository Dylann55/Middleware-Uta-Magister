/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { VerifyAdministrative } from '../../repository/verifyRole/verifyAdministrative.js';

const verifyMandated = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const VerifyAdministrativeInstance = new VerifyAdministrative();
  const { user, roles } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await VerifyAdministrativeInstance.verifyAdministrative(dataBase, roles.Encargado, user.id);
    if (data) {
      req.body.roles = roles;
      next();
    } else {
      res.status(400).json({ error: 'El usuario no es un encargado válido' });
    }
  } else {
    res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
  }
};
export default verifyMandated;
