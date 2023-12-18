/* eslint-disable import/extensions */
import { UpdateStatusID } from '../../../../../repository/handleSpecialization/specializationHasSemester/updateStatusID.js';

const updateStatusID = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    specializationHasSemesterID, statusID,
  } = req.body;
  const updateStatusIDInstance = new UpdateStatusID();
  try {
    await updateStatusIDInstance.updateStatusID(dataBase, specializationHasSemesterID, statusID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateStatusID;
