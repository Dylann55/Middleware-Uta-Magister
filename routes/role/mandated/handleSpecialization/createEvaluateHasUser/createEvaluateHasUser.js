/* eslint-disable import/extensions */
import { CreateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/createEvaluateHasUser.js';

const createEvaluateHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    academic1_userID, academic2_userID, academic3_userID, specializationHasSemesterID,
  } = req.body;
  const createEvaluateHasUserInstance = new CreateEvaluateHasUser();
  const dataArray = [
    { userID: academic1_userID, academicCategory: 1, specializationHasSemesterID },
    { userID: academic2_userID, academicCategory: 2, specializationHasSemesterID },
    { userID: academic3_userID, academicCategory: 3, specializationHasSemesterID },
  ];
  try {
    await createEvaluateHasUserInstance.createEvaluateHasUser(dataBase, dataArray);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createEvaluateHasUser;
