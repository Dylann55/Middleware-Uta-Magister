/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { VerifyRole } from '../../repository/verifyRole/verifyRole.js';
import { SearchAdministrative } from '../../repository/authCases/searchAdministrative.js';

const verifyAcademic = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const VerifyRoleInstance = new VerifyRole();
  try {
    const { user } = await searchUserRole(dataBase, access_token);

    if (user) {
      const data = await VerifyRoleInstance.verifyRole(dataBase, 'academic', user.id);

      if (data) {
        req.body.roleHasUserID = data.roleHasUserID;
        req.body.userID = data.userID;
        next();
      } else {
        const searchAdministrativeInstance = new SearchAdministrative();
        const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.id);

        if (administrative.length === 0) {
          return res.status(403).json({ errorDenied: 'No tienes permiso para ingresar' });
        }

        res.status(400).json({ error: 'El usuario no es un académico válido' });
      }
    } else {
      res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
    }
  } catch (error) {
    if (error.message === 'JWT expired') {
      res.status(400).json({ expirationError: 'La sesión ha expirado. Por favor, inicia sesión nuevamente.' });
    } else {
      // eslint-disable-next-line no-console
      console.error('Error en la verificación académica:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

export default verifyAcademic;
