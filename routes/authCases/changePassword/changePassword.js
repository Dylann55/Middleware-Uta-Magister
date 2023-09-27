/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdatePassword } from '../../../repository/roleAssignment/user/updatePassword.js';
import { GetUserAuth } from '../../../repository/utils/getUserAuth.js';

const changePassword = async (req, res) => {
  const dataBase = req.dataBase;
  const { access_token, password } = req.body;
  const updatePasswordInstance = new UpdatePassword();
  const getUserAuth = new GetUserAuth();
  try {
    const userAuth = await getUserAuth.getUserAuth(dataBase, access_token);
    await updatePasswordInstance.updatePassword(dataBase, userAuth.id, password);
    res.status(200).json({ verificationMessage: 'La contraseña se actualizó exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default changePassword;
