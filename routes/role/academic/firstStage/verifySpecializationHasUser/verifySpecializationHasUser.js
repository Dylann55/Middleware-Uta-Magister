/* eslint-disable import/extensions */
import { VerifyFirstSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/verifyFirstSpecializationHasUser.js';

const verifySpecializationHasUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { specializationHasUserID, roleHasUserID } = req.body;
  const verifyFirstSpecializationHasUserInstance = new VerifyFirstSpecializationHasUser();
  try {
    const data = await verifyFirstSpecializationHasUserInstance.verifyFirstSpecializationHasUser(dataBase, roleHasUserID, specializationHasUserID);
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
