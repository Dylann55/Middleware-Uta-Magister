/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
import { VerificationApproval } from '../../../../../../repository/handleSpecialization/specializationHasSemester/verificationApproval.js';
import { UpdateStatusID } from '../../../../../../repository/handleSpecialization/specializationHasUser/updateStatusID.js';

const verificationApproval = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { typeEvaluateID, specializationHasUserID, userID } = req.body;
  const verificationApprovalInstance = new VerificationApproval();
  const updateStatusIDInstance = new UpdateStatusID();
  try {
    if (typeEvaluateID == 1) {
      await updateStatusIDInstance.updateStatusID(dataBase, specializationHasUserID, 9, userID);
      next();
    } else if (typeEvaluateID == 2) {
      const data = await verificationApprovalInstance.verificationApproval(dataBase, typeEvaluateID, specializationHasUserID, 7);
      if (data) {
        next();
      } else {
        return res.status(409).json({ error: 'No puedes continuar porque aún no has aprobado el anteproyecto' });
      }
    } else {
      return res.status(409).json({ error: 'El identificador del tipo de evaluacion no es valido' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verificationApproval;
