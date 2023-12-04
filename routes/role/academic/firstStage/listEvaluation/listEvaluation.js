/* eslint-disable import/extensions */
import { SelectFirstSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/selectFirstSpecializationHasUser.js';

const listEvaluation = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID } = req.body;
  const selectFirstSpecializationHasUserInstance = new SelectFirstSpecializationHasUser();
  try {
    const data = await selectFirstSpecializationHasUserInstance.selectFirstSpecializationHasUser(dataBase, roleHasUserID);
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
