/* eslint-disable import/extensions */
import { UpdateSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/updateSpecializationHasUser.js';

const updateSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, specializationID } = req.body;
  const updateSpecializationHasUserInstance = new UpdateSpecializationHasUser();
  try {
    await updateSpecializationHasUserInstance.updateSpecializationHasUser(dataBase, specializationHasUserID, specializationID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateSpecializationHasUser;
