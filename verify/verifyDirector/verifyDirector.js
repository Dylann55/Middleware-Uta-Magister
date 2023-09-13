/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { SearchRole } from '../../repository/utils/searchRole.js';

const verifyDirector = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const searchRole = new SearchRole();
  const { user, roles } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await searchRole.searchRole(dataBase, roles.Director, user.userID);
    if (data) {
      next();
    } else {
      res.status(400).json({ error: 'Director Inválido' });
    }
  } else {
    res.status(400).json({ error: 'Error al verificar Director' });
  }
};
export default verifyDirector;
