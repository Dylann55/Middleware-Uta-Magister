/* eslint-disable import/extensions */
import { VerifySpecializationHasStudent } from '../../../../../../repository/handleSpecialization/specializationEvaluationAcademics/verifySpecializationHasStudent.js';

const verifySpecializationHasStudent = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { userID, specializationHasUserID, specializationHasSemesterID } = req.body;
  const verifySpecializationHasStudentInstance = new VerifySpecializationHasStudent();
  try {
    const data = await verifySpecializationHasStudentInstance.verifySpecializationHasStudent(dataBase, userID, specializationHasUserID, specializationHasSemesterID);
    if (data) {
      req.body.semesterID = data.semesterID;
      req.body.typeEvaluateID = data.typeEvaluateID;
      req.body.evaluationStatusID = data.evaluationStatusID;
      req.body.specializationID = data.specializationID;
      next();
    } else {
      return res.status(409).json({ error: 'No tienes permiso para modificar esta evaluación' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifySpecializationHasStudent;
