/* eslint-disable import/extensions */
import { GetProjectURL } from '../../../../../../repository/handleSpecialization/evaluate/getProjectURL.js';

const getProjectURL = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { evaluateID, specializationHasSemesterID } = req.body;
  const getProjectURLInstance = new GetProjectURL();
  try {
    req.body.projectURL = await getProjectURLInstance.getProjectURL(dataBase, evaluateID, specializationHasSemesterID);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default getProjectURL;
