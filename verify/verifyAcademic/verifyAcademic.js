/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { VerifyRole } from '../../repository/verifyRole/verifyRole.js';

const verifyAcademic = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const VerifyRoleInstance = new VerifyRole();
  const { user } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await VerifyRoleInstance.verifyRole(dataBase, 'academic', user.id);
    if (data) {
      req.body.roleHasUserID = data.roleHasUserID;
      next();
    } else {
      res.status(400).json({ error: 'El usuario no es un academico válido' });
    }
  } else {
    res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
  }
};
export default verifyAcademic;
