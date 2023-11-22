/* eslint-disable import/extensions */
import { UpdateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/updateEvaluateHasUser.js';

const updateEvaluateHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    evaluateHasUser1ID, evaluateHasUser2ID, evaluateHasUser3ID, academic1_roleHasUserID, academic2_roleHasUserID, academic3_roleHasUserID, specializationHasUserID,
  } = req.body;
  const updateEvaluateHasUserInstance = new UpdateEvaluateHasUser();
  const dataArray = [
    {
      evaluateHasUserID: evaluateHasUser1ID, roleHasUserID: academic1_roleHasUserID, academicCategory: 1, specializationHasUserID,
    },
    {
      evaluateHasUserID: evaluateHasUser2ID, roleHasUserID: academic2_roleHasUserID, academicCategory: 2, specializationHasUserID,
    },
    {
      evaluateHasUserID: evaluateHasUser3ID, roleHasUserID: academic3_roleHasUserID, academicCategory: 3, specializationHasUserID,
    },
  ];
  try {
    await updateEvaluateHasUserInstance.updateEvaluateHasUser(dataBase, dataArray);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluateHasUser;
