/* eslint-disable import/extensions */
import {
  express,
  handleFileUpload,
  listDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  validateRoleHasUserID,
  validateDocumentID,
  validateArrayDocumentID,
  validateUrl,
} from './document.modules.js';

const documentRoute = express.Router();
documentRoute.route('/')
  .get(validateRoleHasUserID, listDocument)
  .post(validateRoleHasUserID, handleFileUpload, createDocument)
  .put(validateUrl, validateDocumentID, handleFileUpload, updateDocument)
  .delete(validateArrayDocumentID, deleteDocument);
export default documentRoute;
