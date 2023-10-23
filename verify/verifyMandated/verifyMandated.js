/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { GetRole } from '../../repository/utils/getRole.js';
import { VerifyRole } from '../../repository/verifyRole/verifyRole.js';
import { SearchAdministrative } from '../../repository/authCases/searchAdministrative.js';

const verifyMandated = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const VerifyRoleInstance = new VerifyRole();
  const getRole = new GetRole();
  const { user } = await searchUserRole(dataBase, access_token);
  if (user) {
    const roles = await getRole.getRole(dataBase);
    const data = await VerifyRoleInstance.verifyRole(dataBase, 'mandated', user.id);
    if (data) {
      req.body.roles = roles;
      next();
    } else {
      const searchAdministrativeInstance = new SearchAdministrative();
      const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.id);
      if (!administrative) {
        return res.status(403).json({ errorDenied: 'No tienes permiso para ingresar' });
      }
      res.status(400).json({ error: 'El usuario no es un encargado válido' });
    }
  } else {
    res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
  }
};
export default verifyMandated;
