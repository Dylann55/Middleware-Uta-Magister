/* eslint-disable import/extensions */
import { DeleteSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/deleteSpecializationHasUser.js';

const deleteSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasUserIDs } = req.body;
  const deleteSpecializationHasUserInstance = new DeleteSpecializationHasUser();
  try {
    await deleteSpecializationHasUserInstance.deleteSpecializationHasUser(dataBase, specializationHasUserIDs);

    res.status(200).json({ verificationMessage: 'La especialización se ha eliminado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteSpecializationHasUser;
