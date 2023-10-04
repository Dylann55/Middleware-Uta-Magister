/* eslint-disable import/extensions */
import searchUserRole from '../searchUserRole.js';
import { SearchRole } from '../../repository/utils/searchRole.js';

const verifyAcademic = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const searchRole = new SearchRole();
  const { user, roles } = await searchUserRole(dataBase, access_token);
  if (user) {
    const data = await searchRole.searchRole(dataBase, roles.Academico, user.userID);
    if (data) {
      req.body.roleHasUserID = data.roleHasUserID;
      next();
    } else {
      res.status(400).json({ error: 'Academico Inválido' });
    }
  } else {
    res.status(400).json({ expirationError: 'Error la sesión expiro' });
  }
};
export default verifyAcademic;
