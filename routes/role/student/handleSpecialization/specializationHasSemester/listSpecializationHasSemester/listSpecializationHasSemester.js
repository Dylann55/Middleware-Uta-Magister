/* eslint-disable import/extensions */
import { SelectUserSpecializationEvaluationAcademics } from '../../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectUserSpecializationEvaluationAcademics.js';

const listSpecializationHasSemester = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, userID } = req.body;
  const selectSpecializationEvaluationAcademicsInstance = new SelectUserSpecializationEvaluationAcademics();
  try {
    const data = await selectSpecializationEvaluationAcademicsInstance.selectSpecializationEvaluationAcademics(dataBase, userID, specializationHasUserID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listSpecializationHasSemester;
