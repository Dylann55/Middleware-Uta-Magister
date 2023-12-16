/* eslint-disable import/extensions */
import { CreateSpecializationHasSemester } from '../../../../../../repository/handleSpecialization/specializationHasSemester/createSpecializationHasSemester.js';

const createSpecializationHasSemester = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, semesterID, typeEvaluateID } = req.body;
  const createSpecializationHasSemesterInstance = new CreateSpecializationHasSemester();
  try {
    await createSpecializationHasSemesterInstance.createSpecializationHasSemester(dataBase, specializationHasUserID, semesterID, typeEvaluateID);
    req.body.statusID = 9;
    next();
  } catch (error) {
    if (error && error.code === '23505') {
      res.status(400).json({ message: 'No puedes crear el mismo tipo de evaluación más de una vez durante el actual semestre' });
    } else if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createSpecializationHasSemester;
