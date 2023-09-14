/* eslint-disable import/extensions */
import { UpdatePassword } from '../../../../../repository/roleAssignment/user/updatePassword.js';

const updatePassword = async (req, res) => {
  const dataBase = req.dataBase;
  const { id, password } = req.body;
  const updatePasswordInstance = new UpdatePassword();
  try {
    await updatePasswordInstance.updatePassword(dataBase, id, password);
    res.status(200).json({ verificationMessage: 'La contraseña se actualizó exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updatePassword;
