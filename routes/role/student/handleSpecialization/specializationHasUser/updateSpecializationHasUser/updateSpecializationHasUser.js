/* eslint-disable import/extensions */
import { UpdateSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/updateSpecializationHasUser.js';

const updateSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    specializationHasUserID, semesterID, specializationID, userID,
  } = req.body;
  const updateSpecializationHasUserInstance = new UpdateSpecializationHasUser();
  try {
    await updateSpecializationHasUserInstance.updateSpecializationHasUser(dataBase, specializationHasUserID, specializationID, semesterID, userID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error && error.code === '23505') {
      res.status(400).json({ message: 'Ya estás asociado a esta especialización' });
    } else if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateSpecializationHasUser;
