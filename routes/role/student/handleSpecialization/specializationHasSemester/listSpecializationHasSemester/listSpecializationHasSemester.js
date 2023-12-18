/* eslint-disable import/extensions */
import { SelectUserSpecializationEvaluationAcademics } from '../../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectUserSpecializationEvaluationAcademics.js';
import mergeData from '../../../../../../utils/mergeData.js';

const listSpecializationHasSemester = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, userID } = req.body;
  const selectSpecializationEvaluationAcademicsInstance = new SelectUserSpecializationEvaluationAcademics();
  try {
    const data = await selectSpecializationEvaluationAcademicsInstance.selectSpecializationEvaluationAcademics(dataBase, 'preliminaryProjectEvaluation', userID, specializationHasUserID);
    const data2 = await selectSpecializationEvaluationAcademicsInstance.selectSpecializationEvaluationAcademics(dataBase, 'thesisEvaluation', userID, specializationHasUserID);
    const mergedList = mergeData(data, data2);
    res.status(200).json(mergedList);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listSpecializationHasSemester;
