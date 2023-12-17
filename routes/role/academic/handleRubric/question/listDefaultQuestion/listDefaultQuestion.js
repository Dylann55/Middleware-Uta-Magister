/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectDefaultQuestion } from '../../../../../../repository/handleSpecialization/question/selectDefaultQuestion.js';

const listDefaultQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const selectDefaultQuestionInstance = new SelectDefaultQuestion();
  try {
    const data = await selectDefaultQuestionInstance.selectDefaultQuestion(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listDefaultQuestion;
