/* eslint-disable import/extensions */
import { VerifySpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/verifySpecializationHasUser.js';

const verifySpecializationHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, roleHasUserID } = req.body;
  const verifySpecializationHasUserInstance = new VerifySpecializationHasUser();
  try {
    const data = await verifySpecializationHasUserInstance.verifySpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID);
    if (data) {
      req.body.evaluationStatusID = data.evaluationStatusID;
      req.body.specializationID = data.specializationID;
      next();
    } else {
      return res.status(409).json({ error: 'No eres el Estudiante de esta Especialización' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifySpecializationHasUser;
