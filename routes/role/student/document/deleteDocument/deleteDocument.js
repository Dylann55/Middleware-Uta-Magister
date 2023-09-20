/* eslint-disable import/extensions */
import { GetDocument } from '../../../../../repository/storage/document/getDocument.js';
import { DeleteStorage } from '../../../../../repository/storage/deleteStorage.js';
import { DeleteDocument } from '../../../../../repository/storage/document/deleteDocument.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const deleteDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID, documentIDs } = req.body;
  const bucketLocation = 'image';
  const getDocumentInstance = new GetDocument();
  const deleteStorageInstance = new DeleteStorage();
  const deleteDocumentInstance = new DeleteDocument();
  try {
    const deletePromises = documentIDs.map(async (documentID) => {
      const document = await getDocumentInstance.getDocument(dataBase, documentID, roleHasUserID);
      if (!document) {
        const findError = new Error('No puedes modificar este documento porque no tienes permisos para acceder a él o el documento no existe.');
        findError.status = 409;
        throw findError;
      }
      const archive = document.archive;
      const uniqueFileName = `Documents/${getUniqueFileName(archive)}`;
      await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
      await deleteDocumentInstance.deleteDocument(dataBase, documentID);
    });

    await Promise.all(deletePromises);

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
