/* eslint-disable import/extensions */
import { DeleteUser } from '../../../../repository/sysadminCases/user/deleteUser.js';

const deleteUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userIDs } = req.body;
  const deleteUserInstance = new DeleteUser();
  try {
    const deletePromises = userIDs.map(async (userID) => {
      await deleteUserInstance.deleteUser(dataBase, userID);
    });

    await Promise.all(deletePromises);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteUser;
