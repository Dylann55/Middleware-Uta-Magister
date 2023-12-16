/* eslint-disable import/extensions */
import { UpdateSpecializationHasSemester } from '../../../../../../repository/handleSpecialization/specializationHasSemester/updateSpecializationHasSemester.js';

const updateSpecializationHasSemester = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID, typeEvaluateID, specializationHasUserID } = req.body;
  const updateSpecializationHasSemesterInstance = new UpdateSpecializationHasSemester();
  try {
    await updateSpecializationHasSemesterInstance.updateSpecializationHasSemester(dataBase, specializationHasSemesterID, typeEvaluateID, specializationHasUserID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error && error.code === '23505') {
      res.status(409).json({ message: 'No puedes crear un mismo tipo de evaluacion durante este semestre' });
    } else if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateSpecializationHasSemester;
