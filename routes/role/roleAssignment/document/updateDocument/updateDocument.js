/* eslint-disable import/extensions */
import { UpdateStorage } from '../../../../../repository/storage/updateStorage.js';
import { UpdateDocument } from '../../../../../repository/storage/document/updateDocument.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const updateDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const { documentID, archive, formatID } = req.data;
  const bucketLocation = 'image/Documents';
  const updateStorageInstance = new UpdateStorage();
  const updateDocumentInstance = new UpdateDocument();
  try {
    const uniqueFileName = getUniqueFileName(archive);
    const newArchive = await updateStorageInstance.updateStorage(dataBase, bucketLocation, file, uniqueFileName);
    await updateDocumentInstance.updateDocument(dataBase, documentID, newArchive, formatID);
    res.status(200).json({ verificationMessage: 'El documento fue sido actualizado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateDocument;
