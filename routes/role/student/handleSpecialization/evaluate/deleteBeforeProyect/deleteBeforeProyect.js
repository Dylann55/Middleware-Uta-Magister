/* eslint-disable import/extensions */
import { DeleteStorage } from '../../../../../../repository/storage/deleteStorage.js';
import getUniqueFileName from '../../../../../../repository/storage/getUniqueFileName.js';

const deleteDocument = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    stage, semesterID, specializationID, beforeProyect,
  } = req.data;
  const bucketLocation = 'image';
  const deleteStorageInstance = new DeleteStorage();
  try {
    const uniqueFileName = `${stage}/${specializationID}/${semesterID}/${getUniqueFileName(beforeProyect)}`;
    await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteDocument;
