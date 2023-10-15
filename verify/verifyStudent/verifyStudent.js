/* eslint-disable import/extensions */
import { GetUserAuth } from '../../repository/utils/getUserAuth.js';
import { VerifyRole } from '../../repository/verifyRole/verifyRole.js';

const verifyStudent = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const getUserAuth = new GetUserAuth();
  const verifyRoleInstance = new VerifyRole();
  const user = await getUserAuth.getUserAuth(dataBase, access_token);
  if (user) {
    const data = await verifyRoleInstance.verifyRole(dataBase, 'student', user.id);
    if (data) {
      req.body.userID = data.userID;
      req.body.id = data.id;
      req.body.roleHasUserID = data.roleHasUserID;
      next();
    } else {
      res.status(400).json({ error: 'El usuario no es un estudiante válido' });
    }
  } else {
    res.status(400).json({ expirationError: 'La sesión ha expirado o las credenciales son inválidas' });
  }
};
export default verifyStudent;
