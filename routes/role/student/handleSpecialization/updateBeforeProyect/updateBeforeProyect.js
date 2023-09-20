/* eslint-disable import/extensions */
import { UpdateStorage } from '../../../../../repository/storage/updateStorage.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const updateBeforeProyect = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const { beforeProyect } = req.data;
  const bucketLocation = 'image/Evaluate';
  const uniqueFileName = getUniqueFileName(beforeProyect);
  const updateStorageInstance = new UpdateStorage();
  try {
    await updateStorageInstance.updateStorage(dataBase, bucketLocation, file, uniqueFileName);
    res.status(200).json({ verificationMessage: 'El documento fue sido actualizado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateBeforeProyect;
