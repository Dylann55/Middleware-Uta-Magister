/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateRubricHasQuestion } from '../../../../../../repository/handleSpecialization/rubricHasQuestion/updateRubricHasQuestion.js';

const updateRubricHasQuestion = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    rubricHasQuestionArray,
  } = req.body;
  const updateRubricHasQuestionInstance = new UpdateRubricHasQuestion();
  try {
    const updatePromises = rubricHasQuestionArray.map(async (dataArray) => {
      await updateRubricHasQuestionInstance.updateRubricHasQuestion(dataBase, dataArray.rubricID, dataArray.rubricHasQuestionID, dataArray);
    });
    await Promise.all(updatePromises);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateRubricHasQuestion;
