/* eslint-disable import/extensions */
import { CreateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/createEvaluateHasUser.js';

const createEvaluateHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    academic1_roleHasUserID, academic2_roleHasUserID, academic3_roleHasUserID, specializationHasUserID,
  } = req.body;
  const createEvaluateHasUserInstance = new CreateEvaluateHasUser();
  const dataArray = [
    { roleHasUserID: academic1_roleHasUserID, academicCategory: 1, specializationHasUserID },
    { roleHasUserID: academic2_roleHasUserID, academicCategory: 2, specializationHasUserID },
    { roleHasUserID: academic3_roleHasUserID, academicCategory: 3, specializationHasUserID },
  ];
  try {
    await createEvaluateHasUserInstance.createEvaluateHasUser(dataBase, dataArray);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createEvaluateHasUser;
