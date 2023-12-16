/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectEvaluationRubric } from '../../../../../../repository/handleSpecialization/evaluationRubric/selectEvaluationRubric.js';

const listEvaluationRubric = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateHasUserID, evaluateID } = req.body;
  const selectEvaluationRubricInstance = new SelectEvaluationRubric();
  try {
    const data = await selectEvaluationRubricInstance.selectEvaluationRubric(dataBase, evaluateHasUserID, evaluateID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listEvaluationRubric;
