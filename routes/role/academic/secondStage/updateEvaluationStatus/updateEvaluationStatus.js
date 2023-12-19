/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
import { UpdateEvaluationStatus } from '../../../../../repository/handleSpecialization/specializationHasSemester/updateEvaluationStatus.js';

const updateEvaluationStatus = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    evaluationStatusID, specializationHasSemesterID,
  } = req.body;
  const updateEvaluationStatusInstance = new UpdateEvaluationStatus();
  try {
    await updateEvaluationStatusInstance.updateEvaluationStatus(dataBase, specializationHasSemesterID, evaluationStatusID);
    if (evaluationStatusID == 11 || evaluationStatusID == 12) {
      req.body.statusID = 7;
      next();
    } else if (evaluationStatusID == 16) {
      req.body.statusID = 6;
      next();
    } else {
      res.status(200).json({ verificationMessage: 'Se ha actualizado exitosamente' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluationStatus;
