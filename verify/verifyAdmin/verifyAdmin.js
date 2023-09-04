/* eslint-disable import/extensions */
import searchUserRole from './searchUserRole.js';
import { SearchRole } from '../../repository/utils/searchRole.js';

const verifyAdmin = async (req, res, next) => {
  const { dataBase } = req;
  const { access_token } = req.body;
  const searchRole = new SearchRole();
  const { worker, roles } = await searchUserRole(dataBase, access_token);

  if (worker) {
    const data = await searchRole.searchRole(dataBase, roles.Administrador, worker.workerID);
    if (data != null) {
      next();
    } else {
      res.status(400).json({ error: 'Administrador Inválido' });
    }
  } else {
    res.status(400).json({ error: 'access token inválido' });
  }
};
export default verifyAdmin;
