/* eslint-disable import/extensions */
import { SelectSecondSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/selectSecondSpecializationHasUser.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID } = req.body;
  const selectSecondSpecializationHasUserInstance = new SelectSecondSpecializationHasUser();
  try {
    const data = await selectSecondSpecializationHasUserInstance.selectSecondSpecializationHasUser(dataBase, roleHasUserID);
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
