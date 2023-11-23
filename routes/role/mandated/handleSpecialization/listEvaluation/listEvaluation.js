/* eslint-disable import/extensions */
import { SelectSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/selectSpecializationHasUser.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const selectSpecializationHasUserInstance = new SelectSpecializationHasUser();
  try {
    const data = await selectSpecializationHasUserInstance.selectSpecializationHasUser(dataBase);
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
