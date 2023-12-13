/* eslint-disable import/extensions */
import {
  express,
  handleFileUpload,
  listAllDocument,
  listDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  deleteDocuments,
  validateUserID,
  validateDocumentID,
  validateArrayDocumentID,
  validateUrl,
  validateCategory,
} from './document.modules.js';

const documentRoute = express.Router();

documentRoute.get('/documents', listAllDocument);
documentRoute.delete('/documents', validateArrayDocumentID, deleteDocuments);

documentRoute.route('/')
  .get(validateUserID, listDocument)
  .post(validateCategory, validateUserID, handleFileUpload, createDocument)
  .put(validateCategory, validateDocumentID, updateDocument)
  .delete(validateDocumentID, validateUrl, deleteDocument);
export default documentRoute;
