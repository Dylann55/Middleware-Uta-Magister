/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateRoleHasNewUser } from '../../../../../repository/roleAssignment/roleHasUser/createRoleHasNewUser.js';

const createRoleHasNewUser = async (req, res) => {
  const dataBase = req.dataBase;
  const userID = req.userID;
  const { roleIDs } = req.body;
  const createRoleHasNewUserInstance = new CreateRoleHasNewUser();
  try {
    const createPromises = roleIDs.map(async (roleID) => {
      await createRoleHasNewUserInstance.createRoleHasNewUser(dataBase, userID, roleID);
    });

    await Promise.all(createPromises);

    res.status(200).json({ verificationMessage: 'Se creo el Rol exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRoleHasNewUser;
