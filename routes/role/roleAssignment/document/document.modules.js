/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listDocument from './listDocument/listDocument.js';
import createDocument from './createDocument/createDocument.js';
import updateDocument from './updateDocument/updateDocument.js';
import deleteDocument from './deleteDocument/deleteDocument.js';
import validateRoleHasUserID from '../../../../validations/role/validateRoleHasUserID/validateRoleHasUserID.js';
import validateDocumentID from '../../../../validations/storage/document/validateDocumentID/validateDocumentID.js';
import validateArrayDocumentID from '../../../../validations/storage/document/validateArrayDocumentID/validateArrayDocumentID.js';
import validateUrl from '../../../../validations/storage/document/validateUrl/validateUrl.js';

export {
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
};