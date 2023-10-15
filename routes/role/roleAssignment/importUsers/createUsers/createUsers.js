/* eslint-disable import/extensions */
import { CreateUsers } from '../../../../../repository/import/createUsers.js';
import { GetRole } from '../../../../../repository/utils/getRole.js';

const createUsers = async (req, res, next) => {
  const dataBase = req.dataBase;
  const excelData = req.excelData;
  const createUsersInstance = new CreateUsers();
  const getRoleInstance = new GetRole();
  try {
    const roles = await getRoleInstance.getRole(dataBase);
    const users = await createUsersInstance.createUsers(dataBase, excelData);
    req.excelData = users.map((item) => ({ ...item, roleID: roles.Estudiante }));
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default createUsers;
