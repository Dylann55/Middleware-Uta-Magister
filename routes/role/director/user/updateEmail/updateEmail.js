/* eslint-disable import/extensions */
import { UpdateEmail } from '../../../../../repository/director/user/updateEmail.js';

const updateEmail = async (req, res) => {
  const dataBase = req.dataBase;
  const { id, email } = req.body;
  const updateEmailInstance = new UpdateEmail();
  try {
    await updateEmailInstance.updateEmail(dataBase, id, email);
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
