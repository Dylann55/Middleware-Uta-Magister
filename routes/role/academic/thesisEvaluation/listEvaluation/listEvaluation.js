/* eslint-disable import/extensions */
import { SelectThesisEvaluation } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/selectThesisEvaluation.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectThesisEvaluationInstance = new SelectThesisEvaluation();
  try {
    const data = await selectThesisEvaluationInstance.selectThesisEvaluation(dataBase, userID);
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
