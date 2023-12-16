/* eslint-disable import/extensions */
import { SelectEvaluate } from '../../../../../../repository/handleSpecialization/evaluate/selectEvaluate.js';

const listEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID, stageID } = req.body;
  const selectEvaluateInstance = new SelectEvaluate();
  try {
    const data = await selectEvaluateInstance.selectEvaluate(dataBase, specializationHasSemesterID, stageID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listEvaluate;
