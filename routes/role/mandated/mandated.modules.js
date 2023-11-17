/* eslint-disable import/extensions */
import express from 'express';
import roleAssignmentRoute from '../handleShared/roleAssignment/roleAssignment.js';
import validateAllowedRoles from '../../../validations/role/mandated/validateAllowedRoles/validateAllowedRoles.js';
import handleSpecializationRoute from './handleSpecialization/handleSpecialization.js';
import documentRoute from '../handleShared/document/document.js';
import handleTitleRoute from '../handleShared/handleTitle/handleTitleRoute.js';
import semesterRoute from '../handleShared/semester/semesterRoute.js';

export {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
  handleSpecializationRoute,
  documentRoute,
  handleTitleRoute,
  semesterRoute,
};
