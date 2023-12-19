/* eslint-disable import/extensions */
import { UpdateStatusID } from '../../../../../repository/handleSpecialization/specializationHasSemester/updateStatusID.js';

const updateSpecializationHasSemester = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    specializationHasSemesterID, statusID,
  } = req.body;
  const updateStatusIDInstance = new UpdateStatusID();
  try {
    await updateStatusIDInstance.updateStatusID(dataBase, specializationHasSemesterID, statusID);
    if (statusID === 7) {
      req.body.statusID = 11;
      next();
    } else {
      res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateSpecializationHasSemester;
