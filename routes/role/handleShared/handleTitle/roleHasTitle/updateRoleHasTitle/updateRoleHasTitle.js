/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateRoleHasTitle } from '../../../../../../repository/handleTitle/roleHasTitle/updateRoleHasTitle.js';

const updateRoleHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    roleHasTitleID, titleID,
  } = req.body;
  const updateRoleHasTitleInstance = new UpdateRoleHasTitle();
  try {
    await updateRoleHasTitleInstance.updateRoleHasTitle(dataBase, roleHasTitleID, titleID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateRoleHasTitle;
