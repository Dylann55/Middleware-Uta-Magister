/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteUser } from '../../../../../repository/roleAssignment/user/deleteUser.js';

const deleteUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { IDs } = req.body;
  const deleteUserInstance = new DeleteUser();
  try {
    const deletePromises = IDs.map(async (id) => {
      await deleteUserInstance.deleteUser(dataBase, id);
    });

    await Promise.all(deletePromises);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteUser;
