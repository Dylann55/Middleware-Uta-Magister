/* eslint-disable import/extensions */
import { UpdateEvaluationStatus } from '../../../../../repository/handleSpecialization/specializationHasSemester/updateEvaluationStatus.js';

const updateEvaluationStatus = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    evaluationStatusID, specializationHasSemesterID,
  } = req.body;
  const updateEvaluationStatusInstance = new UpdateEvaluationStatus();
  try {
    await updateEvaluationStatusInstance.updateEvaluationStatus(dataBase, specializationHasSemesterID, evaluationStatusID);
    res.status(200).json({ verificationMessage: 'Se han asignados academícos exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluationStatus;
