/* eslint-disable import/extensions */
import { GetSpecializationHasUser } from '../../../../../../repository/handleSpecialization/specializationHasUser/getSpecializationHasUser.js';

const listSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const getSpecializationHasUserInstance = new GetSpecializationHasUser();
  try {
    const data = await getSpecializationHasUserInstance.getSpecializationHasUser(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listSpecializationHasUser;
