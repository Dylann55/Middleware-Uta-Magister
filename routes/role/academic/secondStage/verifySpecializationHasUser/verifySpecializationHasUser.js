/* eslint-disable import/extensions */
import { VerifySecondSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/verifySecondSpecializationHasUser.js';

const verifySpecializationHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, roleHasUserID } = req.body;
  const verifySecondSpecializationHasUserInstance = new VerifySecondSpecializationHasUser();
  try {
    const data = await verifySecondSpecializationHasUserInstance.verifySecondSpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID);
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
export default verifySpecializationHasUser;