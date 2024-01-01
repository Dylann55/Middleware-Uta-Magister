/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/updateBodyAcademic.js';

const updateBodyAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    bodyAcademicID, investigationLine, typeBond, titleID, titleYear,
  } = req.body;
  const updateBodyAcademicInstance = new UpdateBodyAcademic();
  try {
    await updateBodyAcademicInstance.updateBodyAcademic(dataBase, bodyAcademicID, investigationLine, typeBond, titleID, titleYear);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateBodyAcademic;
