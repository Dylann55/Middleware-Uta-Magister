/* eslint-disable import/extensions */
import {
  express,
  handleFileUpload,
  listDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  validateDocumentID,
  validateArrayDocumentID,
} from './document.modules.js';

const documentRoute = express.Router();
documentRoute.route('/')
  .get(listDocument)
  .post(handleFileUpload, createDocument)
  .put(validateDocumentID, handleFileUpload, updateDocument)
  .delete(validateArrayDocumentID, deleteDocument);
export default documentRoute;
