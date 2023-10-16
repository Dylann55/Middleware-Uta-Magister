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
  validateRoleHasUserID,
  validateDocumentID,
  validateArrayDocumentID,
  validateUrl,
} from './document.modules.js';

const documentRoute = express.Router();

documentRoute.get('/documents', listAllDocument);
documentRoute.delete('/documents', validateArrayDocumentID, deleteDocuments);

documentRoute.route('/')
  .get(validateRoleHasUserID, listDocument)
  .post(validateRoleHasUserID, handleFileUpload, createDocument)
  .put(validateUrl, validateDocumentID, handleFileUpload, updateDocument)
  .delete(validateDocumentID, validateUrl, deleteDocument);
export default documentRoute;
