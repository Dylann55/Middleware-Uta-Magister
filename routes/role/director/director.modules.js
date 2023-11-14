/* eslint-disable import/extensions */
import express from 'express';
import roleAssignmentRoute from '../handleShared/roleAssignment/roleAssignment.js';
import validateAllowedRoles from '../../../validations/role/director/validateAllowedRoles/validateAllowedRoles.js';
import documentRoute from '../handleShared/document/document.js';
import handleTitleRoute from '../handleShared/handleTitle/handleTitleRoute.js';

export {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
  documentRoute,
  handleTitleRoute,
};
