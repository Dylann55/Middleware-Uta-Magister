/* eslint-disable import/extensions */
import { CreateSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/createSpecializationHasUser.js';

const createSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, specializationID, semesterID } = req.body;
  const createSpecializationHasUserInstance = new CreateSpecializationHasUser();
  try {
    await createSpecializationHasUserInstance.createSpecializationHasUser(dataBase, userID, specializationID, semesterID);
    res.status(200).json({ verificationMessage: 'Te has asociado a esta especialización' });
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
export default createSpecializationHasUser;
