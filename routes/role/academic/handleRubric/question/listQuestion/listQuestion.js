/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectQuestion } from '../../../../../../repository/handleSpecialization/question/selectQuestion.js';

const listQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectQuestionInstance = new SelectQuestion();
  try {
    const data = await selectQuestionInstance.selectQuestion(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listQuestion;
