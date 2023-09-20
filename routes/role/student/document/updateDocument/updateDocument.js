/* eslint-disable import/extensions */
import { UpdateStorage } from '../../../../../repository/storage/updateStorage.js';
import { GetDocument } from '../../../../../repository/storage/document/getDocument.js';
import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const updateDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const { roleHasUserID, documentID } = req.data;
  const bucketLocation = 'image/Documents';
  const updateStorageInstance = new UpdateStorage();
  const getDocumentInstance = new GetDocument();
  try {
    const document = await getDocumentInstance.getDocument(dataBase, documentID, roleHasUserID);
    if (!document) {
      const findError = new Error('No puedes modificar este documento porque no tienes permisos para acceder a él o el documento no existe.');
      findError.status = 409;
      throw findError;
    }
    const archive = document.archive;
    const uniqueFileName = getUniqueFileName(archive);
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
export default updateDocument;
