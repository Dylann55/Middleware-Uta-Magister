/* eslint-disable import/extensions */
import { DeleteStorage } from '../../../../../repository/storage/deleteStorage.js';
import { DeleteDocuments } from '../../../../../repository/storage/document/deleteDocuments.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const deleteDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const { documentID, archive } = req.body;
  const bucketLocation = 'image';
  const deleteStorageInstance = new DeleteStorage();
  const deleteDocumentsInstance = new DeleteDocuments();
  try {
    const uniqueFileName = `Documentss/${getUniqueFileName(archive)}`;
    await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    await deleteDocumentsInstance.deleteDocuments(dataBase, documentID);

    res.status(200).json({ verificationMessage: 'El documento se ha eliminado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteDocument;
