/* eslint-disable import/extensions */
import { CreateStorage } from '../../../../../repository/storage/createStorage.js';
import { CreateDocument } from '../../../../../repository/storage/document/createDocument.js';

const createDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const { userID, formatID, category } = req.data;
  const bucketLocation = 'image/Documents';
  const createStorageInstance = new CreateStorage();
  const createDocumentInstance = new CreateDocument();
  try {
    const archive = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await createDocumentInstance.createDocument(dataBase, archive, userID, formatID, category);
    res.status(200).json({ verificationMessage: 'El documento fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createDocument;
