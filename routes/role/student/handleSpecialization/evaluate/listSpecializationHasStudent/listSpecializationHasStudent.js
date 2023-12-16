/* eslint-disable import/extensions */
import { SelectSpecializationHasStudent } from '../../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectSpecializationHasStudent.js';

const listSpecializationHasStudent = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, specializationHasUserID, specializationHasSemesterID } = req.body;
  const selectSpecializationHasStudentInstance = new SelectSpecializationHasStudent();
  try {
    const data = await selectSpecializationHasStudentInstance.selectSpecializationHasStudent(dataBase, userID, specializationHasUserID, specializationHasSemesterID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listSpecializationHasStudent;
