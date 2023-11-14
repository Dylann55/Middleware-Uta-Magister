/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateEmail } from '../../../../../../repository/roleAssignment/user/updateEmail.js';
import { UpdateUserPassword } from '../../../../../../repository/roleAssignment/user/updateUserEmail.js';

const updateEmail = async (req, res) => {
  const dataBase = req.dataBase;
  const { id, email } = req.body;
  const updateEmailInstance = new UpdateEmail();
  const updateUserPasswordInstance = new UpdateUserPassword();
  try {
    await updateEmailInstance.updateEmail(dataBase, id, email);
    await updateUserPasswordInstance.updateUserPassword(dataBase, id, email);
    res.status(200).json({ verificationMessage: 'El email se actualizó exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEmail;
