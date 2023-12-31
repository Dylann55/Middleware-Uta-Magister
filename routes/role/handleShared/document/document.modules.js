/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listAllDocument from './listAllDocument/listAllDocument.js';
import listDocument from './listDocument/listDocument.js';
import createDocument from './createDocument/createDocument.js';
import updateDocument from './updateDocument/updateDocument.js';
import deleteDocument from './deleteDocument/deleteDocument.js';
import deleteDocuments from './deleteDocuments/deleteDocuments.js';
import validateUserID from '../../../../validations/user/validateUserID/validateUserID.js';
import validateDocumentID from '../../../../validations/document/validateDocumentID/validateDocumentID.js';
import validateArrayDocumentID from '../../../../validations/document/validateArrayDocumentID/validateArrayDocumentID.js';
import validateUrl from '../../../../validations/document/validateUrl/validateUrl.js';
import validateCategory from '../../../../validations/document/validateCategory/validateCategory.js';

export {
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
};
