/* eslint-disable import/extensions */
import { GetEvaluateHasUser } from '../../../../../../repository/handleSpecialization/evaluateHasUser/getEvaluateHasUser.js';

const verifyEvaluateHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID, userID } = req.body;
  const getEvaluateHasUserInstance = new GetEvaluateHasUser();
  try {
    const data = await getEvaluateHasUserInstance.getEvaluateHasUser(dataBase, userID, specializationHasSemesterID);
    if (data) {
      req.body.evaluateHasUserID = data[0].evaluateHasUserID;
      next();
    } else {
      return res.status(409).json({ error: 'Acceso denegado: No cuentas con los permisos requeridos para modificar este proceso de evaluación' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifyEvaluateHasUser;
