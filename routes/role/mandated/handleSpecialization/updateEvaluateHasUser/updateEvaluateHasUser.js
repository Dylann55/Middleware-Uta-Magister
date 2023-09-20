/* eslint-disable import/extensions */
import { UpdateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/updateEvaluateHasUser.js';
import { GetStatus } from '../../../../../repository/handleSpecialization/getStatus.js';

const updateEvaluateHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateID, roleHasUserFirstID, roleHasUserSecondID } = req.body;
  const updateEvaluateHasUserInstance = new UpdateEvaluateHasUser();
  const getStatusInstance = new GetStatus();
  try {
    const status = await getStatusInstance.getStatus(dataBase);
    await updateEvaluateHasUserInstance.updateEvaluateHasUser(dataBase, evaluateID, roleHasUserFirstID, roleHasUserSecondID, status['En Revision']);
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
