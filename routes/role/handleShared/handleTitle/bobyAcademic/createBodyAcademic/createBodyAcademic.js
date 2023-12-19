/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/createBodyAcademic.js';

const createBodyAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    userHasTitleID, investigationLine, typeBond,
  } = req.data;
  const createBodyAcademicInstance = new CreateBodyAcademic();
  try {
    await createBodyAcademicInstance.createBodyAcademic(dataBase, userHasTitleID, investigationLine, typeBond);
    res.status(200).json({ verificationMessage: 'El título fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createBodyAcademic;
