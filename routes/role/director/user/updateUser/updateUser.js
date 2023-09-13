/* eslint-disable import/extensions */
import { UpdateUser } from '../../../../../repository/director/user/updateUser.js';

const updateUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone,
  } = req.body;
  const updateUserInstance = new UpdateUser();
  try {
    await updateUserInstance.updateUser(dataBase, userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateUser;
