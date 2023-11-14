/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateRoleHasUser } from '../../../../../../repository/roleAssignment/roleHasUser/createRoleHasUser.js';

const createRoleHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, roleIDs } = req.body;
  const createRoleHasUserInstance = new CreateRoleHasUser();
  try {
    const createPromises = roleIDs.map(async (roleID) => {
      await createRoleHasUserInstance.createRoleHasUser(dataBase, userID, roleID);
    });
    await Promise.all(createPromises);
    res.status(200).json({ verificationMessage: 'Roles asignados exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRoleHasUser;
