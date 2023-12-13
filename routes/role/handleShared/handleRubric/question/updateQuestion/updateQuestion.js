/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateQuestion } from '../../../../../../repository/handleSpecialization/question/updateQuestion.js';

const updateQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    questionID, userID, question,
  } = req.body;
  const updateQuestionInstance = new UpdateQuestion();
  try {
    await updateQuestionInstance.updateQuestion(dataBase, questionID, userID, question);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateQuestion;
