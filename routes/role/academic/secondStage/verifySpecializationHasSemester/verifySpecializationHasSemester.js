/* eslint-disable import/extensions */
import { VerifySecondSpecializationHasSemester } from '../../../../../repository/handleSpecialization/specializationEvaluationAcademics/verifySecondSpecializationHasSemester.js';

const verifySpecializationHasSemester = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasSemesterID, userID } = req.body;
  const verifySecondSpecializationHasSemesterInstance = new VerifySecondSpecializationHasSemester();
  try {
    const data = await verifySecondSpecializationHasSemesterInstance.verifySecondSpecializationHasSemester(dataBase, userID, specializationHasSemesterID);
    if (data) {
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
export default verifySpecializationHasSemester;
