/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateRubric } from '../../../../../../repository/handleSpecialization/rubric/createRubric.js';

const createRubric = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    description, rubricName, evaluateHasUserID, evaluateID,
  } = req.body;
  const createRubricInstance = new CreateRubric();
  try {
    await createRubricInstance.createRubric(dataBase, description, rubricName, evaluateHasUserID, evaluateID);
    res.status(200).json({ verificationMessage: 'La Rubrica fue subido exitosamente' });
  } catch (error) {
    if (error && error.code === '23505') {
      res.status(409).json({ message: 'Ya existe una rubrica asociado a esta evaluación' });
    } else if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRubric;
