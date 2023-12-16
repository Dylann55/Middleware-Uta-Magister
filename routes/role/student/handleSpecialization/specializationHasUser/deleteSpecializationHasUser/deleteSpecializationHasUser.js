/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/deleteSpecializationHasUser.js';

const deleteSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { SpecializationHasUserIDs, userID } = req.body;
  const deleteSpecializationHasUserInstance = new DeleteSpecializationHasUser();
  try {
    await deleteSpecializationHasUserInstance.deleteSpecializationHasUser(dataBase, SpecializationHasUserIDs, userID);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteSpecializationHasUser;
