/* eslint-disable import/extensions */
import { SelectFirstSpecializationHasSemester } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectFirstSpecializationHasSemester.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectFirstSpecializationHasSemesterInstance = new SelectFirstSpecializationHasSemester();
  try {
    const data = await selectFirstSpecializationHasSemesterInstance.selectFirstSpecializationHasSemester(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listEvaluation;
