/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteRubricHasQuestion } from '../../../../../../repository/handleSpecialization/rubricHasQuestion/deleteRubricHasQuestion.js';

const deleteRubricHasQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const { rubricHasQuestionIDs, rubricID } = req.body;
  const deleteRubricHasQuestionInstance = new DeleteRubricHasQuestion();
  try {
    await deleteRubricHasQuestionInstance.deleteRubricHasQuestion(dataBase, rubricHasQuestionIDs, rubricID);
    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteRubricHasQuestion;
