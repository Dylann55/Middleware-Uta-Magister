/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateRubricHasQuestion } from '../../../../../../repository/handleSpecialization/rubricHasQuestion/createRubricHasQuestion.js';

const createRubricHasQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    dataArray,
  } = req.body;
  const createRubricHasQuestionInstance = new CreateRubricHasQuestion();
  try {
    await createRubricHasQuestionInstance.createRubricHasQuestion(dataBase, dataArray);
    res.status(200).json({ verificationMessage: 'La información de la rubrica fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRubricHasQuestion;
