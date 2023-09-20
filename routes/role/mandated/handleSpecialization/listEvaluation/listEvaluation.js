/* eslint-disable import/extensions */
import { SelectEvaluation } from '../../../../../repository/handleSpecialization/selectEvaluation.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const selectEvaluationInstance = new SelectEvaluation();
  try {
    const data = await selectEvaluationInstance.selectEvaluation(dataBase);
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
