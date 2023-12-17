/* eslint-disable import/extensions */
import { SelectDocument } from '../../../../../repository/document/selectDocument.js';

const listDocument = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectDocumentInstance = new SelectDocument();
  try {
    const data = await selectDocumentInstance.selectDocument(dataBase, userID);
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
