/* eslint-disable import/extensions */
import { SelectDocument } from '../../../../../repository/storage/document/selectDocument.js';

const listDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasUserID } = req.body;
  const selectDocumentInstance = new SelectDocument();
  try {
    const data = await selectDocumentInstance.selectDocument(dataBase, roleHasUserID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listDocument;
