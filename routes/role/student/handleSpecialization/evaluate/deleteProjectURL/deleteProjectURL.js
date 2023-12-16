/* eslint-disable import/extensions */
import { DeleteStorage } from '../../../../../../repository/storage/deleteStorage.js';
import getUniqueFileName from '../../../../../../repository/storage/getUniqueFileName.js';

const deleteProjectURL = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    stageID, typeEvaluateID, semesterID, specializationID, projectURL,
  } = req.data;
  const bucketLocation = 'image';
  const deleteStorageInstance = new DeleteStorage();
  try {
    const uniqueFileName = `Evaluate/${stageID}/${specializationID}/${typeEvaluateID}/${semesterID}/${getUniqueFileName(projectURL)}`;
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
export default deleteProjectURL;
