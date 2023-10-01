/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { SearchRole } from '../../repository/utils/searchRole.js';

const verifyStudent = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const searchRole = new SearchRole();
  console.log(access_token);
  const { user, roles } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await searchRole.searchRole(dataBase, roles.Estudiante, user.userID);
    if (data) {
      req.body.userID = data.userID;
      req.body.id = user.id;
      req.body.roleHasUserID = data.roleHasUserID;
      next();
    } else {
      res.status(400).json({ error: 'Estudiante Inválido' });
    }
  } else {
    res.status(400).json({ error: 'Error al verificar Estudiante' });
  }
};
export default verifyStudent;
