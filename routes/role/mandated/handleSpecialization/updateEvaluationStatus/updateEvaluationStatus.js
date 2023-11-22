/* eslint-disable import/extensions */
import { UpdateEvaluationStatus } from '../../../../../repository/handleSpecialization/specializationHasUser/updateEvaluationStatus.js';

const updateEvaluationStatus = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    evaluationStatusID, specializationHasUserID,
  } = req.body;
  const updateEvaluationStatusInstance = new UpdateEvaluationStatus();
  try {
    await updateEvaluationStatusInstance.updateEvaluationStatus(dataBase, evaluationStatusID, specializationHasUserID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluationStatus;
