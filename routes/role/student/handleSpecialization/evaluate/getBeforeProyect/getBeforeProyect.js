/* eslint-disable import/extensions */
import { GetBeforeProyect } from '../../../../../../repository/handleSpecialization/evaluate/getBeforeProyect.js';

const getBeforeProyect = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { evaluateID, specializationHasUserID } = req.body;
  const getBeforeProyectInstance = new GetBeforeProyect();
  try {
    req.body.beforeProyect = await getBeforeProyectInstance.getBeforeProyect(dataBase, evaluateID, specializationHasUserID);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default getBeforeProyect;
