/* eslint-disable import/extensions */
import { SelectSecondSpecializationHasSemester } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectSecondSpecializationHasSemester.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectSecondSpecializationHasSemesterInstance = new SelectSecondSpecializationHasSemester();
  try {
    const data = await selectSecondSpecializationHasSemesterInstance.selectSecondSpecializationHasSemester(dataBase, userID);
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
