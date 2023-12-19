/* eslint-disable import/extensions */
import { VerifyThesisEvaluation } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/verifyThesisEvaluation.js';

const verifyThesisEvaluation = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID, userID } = req.body;
  const verifyThesisEvaluationInstance = new VerifyThesisEvaluation();
  try {
    const data = await verifyThesisEvaluationInstance.verifyThesisEvaluation(dataBase, userID, specializationHasSemesterID);
    if (data) {
      req.body.userID = data.userID;
      req.body.specializationHasUserID = data.specializationHasUserID;
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
export default verifyThesisEvaluation;
