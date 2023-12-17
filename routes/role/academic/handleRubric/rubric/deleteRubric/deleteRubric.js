/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteRubric } from '../../../../../../repository/handleSpecialization/rubric/deleteRubric.js';

const deleteRubric = async (req, res) => {
  const dataBase = req.dataBase;
  const { rubricIDs, evaluateHasUserID } = req.body;
  const deleteRubricInstance = new DeleteRubric();
  try {
    await deleteRubricInstance.deleteRubric(dataBase, rubricIDs, evaluateHasUserID);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteRubric;
