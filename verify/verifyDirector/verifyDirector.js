/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { VerifyAdministrative } from '../../repository/verifyRole/verifyAdministrative.js';

const verifyDirector = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const VerifyAdministrativeInstance = new VerifyAdministrative();
  const { user, roles } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await VerifyAdministrativeInstance.verifyAdministrative(dataBase, roles.Director, user.id);
    if (data) {
      next();
    } else {
      res.status(400).json({ error: 'El usuario no es un director válido' });
    }
  } else {
    res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
  }
};
export default verifyDirector;
