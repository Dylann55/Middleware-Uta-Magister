/* eslint-disable import/extensions */
import { SelectEvaluationbyRoleHasUser } from '../../../../../repository/handleSpecialization/selectEvaluationbyRoleHasUser.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID } = req.body;
  const selectEvaluationInstance = new SelectEvaluationbyRoleHasUser();
  try {
    const data = await selectEvaluationInstance.selectEvaluationbyRoleHasUser(dataBase, roleHasUserID, roleHasUserID);
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
