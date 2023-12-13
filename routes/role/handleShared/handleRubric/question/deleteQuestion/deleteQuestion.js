/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteQuestion } from '../../../../../../repository/handleSpecialization/question/deleteQuestion.js';

const deleteQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const { questionIDs, userID } = req.body;
  const deleteQuestionInstance = new DeleteQuestion();
  try {
    await deleteQuestionInstance.deleteQuestion(dataBase, questionIDs, userID);
    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteQuestion;
