/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/deleteBodyAcademic.js';
import { GetBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/getBodyAcademic.js';
import { DeleteStorage } from '../../../../../../repository/storage/deleteStorage.js';
import getUniqueFileName from '../../../../../../repository/storage/getUniqueFileName.js';

const deleteBodyAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const { bodyAcademicIDs } = req.body;
  const bucketLocation = 'image';
  const getBodyAcademicInstance = new GetBodyAcademic();
  const deleteStorageInstance = new DeleteStorage();
  const deleteBodyAcademicInstance = new DeleteBodyAcademic();
  try {
    const documents = await getBodyAcademicInstance.getBodyAcademic(dataBase, bodyAcademicIDs);
    const deletePromises = documents.map(async (document) => {
      const archive = document.documentTitle;
      const uniqueFileName = `AcademicHasTitle/${getUniqueFileName(archive)}`;
      await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    });
    await Promise.all(deletePromises);
    await deleteBodyAcademicInstance.deleteBodyAcademic(dataBase, bodyAcademicIDs);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteBodyAcademic;
