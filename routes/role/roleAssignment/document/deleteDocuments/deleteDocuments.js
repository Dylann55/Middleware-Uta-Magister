/* eslint-disable import/extensions */
import { GetDocument } from '../../../../../repository/storage/document/getDocument.js';
import { DeleteStorage } from '../../../../../repository/storage/deleteStorage.js';
import { DeleteDocument } from '../../../../../repository/storage/document/deleteDocument.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const deleteDocuments = async (req, res) => {
  const dataBase = req.dataBase;
  const { documentIDs } = req.body;
  const bucketLocation = 'image';
  const getDocumentInstance = new GetDocument();
  const deleteStorageInstance = new DeleteStorage();
  const deleteDocumentInstance = new DeleteDocument();
  try {
    const documents = await getDocumentInstance.getDocument(dataBase, documentIDs);
    const deletePromises = documents.map(async (document) => {
      const archive = document.archive;
      const uniqueFileName = `Documents/${getUniqueFileName(archive)}`;
      await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    });
    await Promise.all(deletePromises);
    await deleteDocumentInstance.deleteDocument(dataBase, documentIDs);

    res.status(200).json({ verificationMessage: 'El documento se ha eliminado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteDocuments;
