/* eslint-disable import/extensions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { InviteUsers } from '../../../../../repository/import/InviteUsers.js';

const inviteUsers = async (req, res, next) => {
  const dataBase = req.dataBase;
  const excelData = req.excelData;
  const inviteUsersInstance = new InviteUsers();
  try {
    for (let i = excelData.length - 1; i >= 0; i--) {
      const email = excelData[i].email;
      const user = await inviteUsersInstance.inviteUsers(dataBase, email, process.env.URL_INVITE);
      if (user) {
        excelData[i].id = user.id;
      } else {
        excelData.splice(i, 1);
      }
    }
    if (excelData.length === 0) {
      const findError = new Error('No se pudieron invitar usuarios: Todos los correos electrónicos ya están registrados');
      findError.status = 409;
      throw findError;
    }
    req.excelData = excelData;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default inviteUsers;
