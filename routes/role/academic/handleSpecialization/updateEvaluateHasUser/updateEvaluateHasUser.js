/* eslint-disable import/extensions */
import { UpdateStatus } from '../../../../../repository/handleSpecialization/evaluateHasUser/updateStatus.js';

const updateEvaluateHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateID, statusID } = req.body;
  const updateStatusInstance = new UpdateStatus();
  try {
    await updateStatusInstance.updateStatus(dataBase, evaluateID, statusID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluateHasUser;
