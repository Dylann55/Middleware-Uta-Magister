/* eslint-disable import/extensions */
import { UpdateStatusID } from '../../../../../repository/handleSpecialization/specializationHasUser/updateStatusID.js';

const updateSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    userID, specializationHasUserID, statusID,
  } = req.body;
  const updateStatusIDInstance = new UpdateStatusID();
  try {
    await updateStatusIDInstance.updateStatusID(dataBase, userID, specializationHasUserID, statusID);
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
