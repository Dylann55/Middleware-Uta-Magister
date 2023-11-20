/* eslint-disable import/extensions */
import { CreateSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/createSpecializationHasUser.js';

const createSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID, specializationID, semesterID } = req.data;
  const createSpecializationHasUserInstance = new CreateSpecializationHasUser();
  try {
    await createSpecializationHasUserInstance.createSpecializationHasUser(dataBase, roleHasUserID, specializationID, semesterID);
    res.status(200).json({ verificationMessage: 'La especialización fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createSpecializationHasUser;
