/* eslint-disable import/extensions */
import { GetEvaluateHasUser } from '../../../../../../repository/handleSpecialization/evaluateHasUser/getEvaluateHasUser.js';

const verifyEvaluateHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, roleHasUserID } = req.body;
  const getEvaluateHasUserInstance = new GetEvaluateHasUser();
  try {
    const data = await getEvaluateHasUserInstance.getEvaluateHasUser(dataBase, roleHasUserID, specializationHasUserID);
    if (data) {
      req.body.evaluateHasUserID = data.evaluateHasUserID;
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
