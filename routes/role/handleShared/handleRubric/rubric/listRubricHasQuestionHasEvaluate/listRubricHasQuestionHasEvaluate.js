/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectRubricHasQuestionHasEvaluate } from '../../../../../../repository/handleSpecialization/rubricHasQuestionHasEvaluate/selectRubricHasQuestionHasEvaluate.js';

const listRubricHasQuestionHasEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateHasUserID, evaluateID } = req.body;
  const selectRubricHasQuestionHasEvaluateInstance = new SelectRubricHasQuestionHasEvaluate();
  try {
    const data = await selectRubricHasQuestionHasEvaluateInstance.selectRubricHasQuestionHasEvaluate(dataBase, evaluateHasUserID, evaluateID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listRubricHasQuestionHasEvaluate;
