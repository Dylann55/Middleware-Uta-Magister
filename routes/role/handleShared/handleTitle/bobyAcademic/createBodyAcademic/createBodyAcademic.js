/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/createBodyAcademic.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';

const createBodyAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    userID, formatID, titleID, titleYear, investigationLine, typeBond,
  } = req.data;
  const bucketLocation = 'image/AcademicHasTitle';
  const createStorageInstance = new CreateStorage();
  const createBodyAcademicInstance = new CreateBodyAcademic();
  try {
    const documentTitle = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await createBodyAcademicInstance.createBodyAcademic(dataBase, documentTitle, userID, formatID, titleID, titleYear, investigationLine, typeBond);
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
