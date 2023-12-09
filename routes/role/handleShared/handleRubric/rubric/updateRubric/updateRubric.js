/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateRubric } from '../../../../../../repository/handleSpecialization/rubric/updateRubric.js';

const updateRubric = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    rubricID, description, rubricName, evaluateHasUserID,
  } = req.body;
  const updateRubricInstance = new UpdateRubric();
  try {
    await updateRubricInstance.updateRubric(dataBase, rubricID, description, rubricName, evaluateHasUserID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateRubric;
