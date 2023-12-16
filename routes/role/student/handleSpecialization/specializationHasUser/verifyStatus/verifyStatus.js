/* eslint-disable import/extensions */
import { VerifyStatus } from '../../../../../../repository/handleSpecialization/specializationHasUser/verifyStatus.js';

const verifyStatus = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { userID, specializationHasUserID } = req.body;
  const verifyStatusInstance = new VerifyStatus();
  try {
    const data = await verifyStatusInstance.verifyStatus(dataBase, userID, specializationHasUserID, 8);
    if (data) {
      next();
    } else {
      return res.status(409).json({ error: 'No tienes permiso para modificar la especialización' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifyStatus;
