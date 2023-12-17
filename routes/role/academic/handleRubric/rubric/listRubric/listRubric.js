/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectRubric } from '../../../../../../repository/handleSpecialization/rubric/selectRubric.js';

const listRubric = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateHasUserID, evaluateID } = req.body;
  const selectRubricInstance = new SelectRubric();
  try {
    const data = await selectRubricInstance.selectRubric(dataBase, evaluateHasUserID, evaluateID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listRubric;
