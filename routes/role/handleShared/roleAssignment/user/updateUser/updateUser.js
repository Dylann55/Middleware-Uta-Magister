/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateUser } from '../../../../../../repository/roleAssignment/user/updateUser.js';

const updateUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, phone,
  } = req.body;
  const updateUserInstance = new UpdateUser();
  try {
    await updateUserInstance.updateUser(dataBase, userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, phone);
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
