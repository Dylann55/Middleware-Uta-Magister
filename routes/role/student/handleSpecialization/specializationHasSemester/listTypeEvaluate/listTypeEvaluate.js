/* eslint-disable import/extensions */
import { SelectTypeEvaluate } from '../../../../../../repository/handleSpecialization/typeEvaluate/selectTypeEvaluate.js';

const listTypeEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const selectTypeEvaluateInstance = new SelectTypeEvaluate();
  try {
    const data = await selectTypeEvaluateInstance.selectTypeEvaluate(dataBase);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listTypeEvaluate;
