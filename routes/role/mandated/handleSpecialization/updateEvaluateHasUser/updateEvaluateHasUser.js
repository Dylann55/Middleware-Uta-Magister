/* eslint-disable import/extensions */
import { UpdateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/updateEvaluateHasUser.js';

const updateEvaluateHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    evaluateHasUser1ID, evaluateHasUser2ID, evaluateHasUser3ID, academic1_userID, academic2_userID, academic3_userID, specializationHasSemesterID,
  } = req.body;
  const updateEvaluateHasUserInstance = new UpdateEvaluateHasUser();
  const dataArray = [
    {
      evaluateHasUserID: evaluateHasUser1ID, userID: academic1_userID, academicCategory: 1, specializationHasSemesterID,
    },
    {
      evaluateHasUserID: evaluateHasUser2ID, userID: academic2_userID, academicCategory: 2, specializationHasSemesterID,
    },
    {
      evaluateHasUserID: evaluateHasUser3ID, userID: academic3_userID, academicCategory: 3, specializationHasSemesterID,
    },
  ];
  try {
    await updateEvaluateHasUserInstance.updateEvaluateHasUser(dataBase, dataArray);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluateHasUser;
