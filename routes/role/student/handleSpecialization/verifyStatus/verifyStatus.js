/* eslint-disable import/extensions */
import { VerifyStatus } from '../../../../../repository/handleSpecialization/evaluateHasUser/verifyStatus.js';
import { GetStatus } from '../../../../../repository/handleSpecialization/getStatus.js';

const verifyEvaluateStatus = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { evaluateID, roleHasUserID } = req.body;
  const verifyStatusInstance = new VerifyStatus();
  const getStatusInstance = new GetStatus();
  try {
    const status = await getStatusInstance.getStatus(dataBase);
    const data = await verifyStatusInstance.verifyStatus(dataBase, evaluateID, status['En Espera'], roleHasUserID);
    if (!data) {
      return res.status(409).json({ error: 'No se puede actualizar porque el estado de Esperao' });
    }
    req.body.beforeProyect = data.beforeProyect;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifyEvaluateStatus;
