/* eslint-disable import/extensions */
import { SelectSpecializationEvaluationAcademics } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectSpecializationEvaluationAcademics.js';
import getTypeEvaluation from '../../../../../utils/getTypeEvaluation.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { typeEvaluateID } = req.body;
  const selectSpecializationEvaluationAcademicsInstance = new SelectSpecializationEvaluationAcademics();
  try {
    const data = await selectSpecializationEvaluationAcademicsInstance.selectSpecializationEvaluationAcademics(dataBase, getTypeEvaluation(typeEvaluateID));
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
