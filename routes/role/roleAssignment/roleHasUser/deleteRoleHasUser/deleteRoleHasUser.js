/* eslint-disable import/extensions */
import { DeleteRoleHasUser } from '../../../../../repository/roleAssignment/roleHasUser/deleteRoleHasUser.js';

const deleteRoleHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, roleIDs } = req.body;
  const deleteRoleHasUserInstance = new DeleteRoleHasUser();
  try {
    const deletePromises = roleIDs.map(async (roleID) => {
      await deleteRoleHasUserInstance.deleteRoleHasUser(dataBase, userID, roleID);
    });

    await Promise.all(deletePromises);
    res.status(200).json({ verificationMessage: 'Se eliminó el Rol exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteRoleHasUser;
