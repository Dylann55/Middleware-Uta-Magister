/* eslint-disable import/extensions */
import { VerifySpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/verifySpecializationHasUser.js';

const verifySpecializationHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { userID, specializationHasUserID } = req.body;
  const verifySpecializationHasUserInstance = new VerifySpecializationHasUser();
  try {
    const data = await verifySpecializationHasUserInstance.verifySpecializationHasUser(dataBase, userID, specializationHasUserID);
    if (data) {
      next();
    } else {
      return res.status(409).json({ error: 'No tienes permiso para esta especialización' });
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
