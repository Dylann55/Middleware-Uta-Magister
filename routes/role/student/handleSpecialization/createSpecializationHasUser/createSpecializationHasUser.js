/* eslint-disable import/extensions */
import { CreateSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/createSpecializationHasUser.js';

const createSpecializationHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { roleHasUserID, specializationID } = req.data;
  const createSpecializationHasUserInstance = new CreateSpecializationHasUser();
  try {
    const data = await createSpecializationHasUserInstance.createSpecializationHasUser(dataBase, roleHasUserID, specializationID);
    req.data.specializationHasUserID = data.specializationHasUserID;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createSpecializationHasUser;
