/* eslint-disable import/extensions */
import express from 'express';
import roleAssignmentRoute from '../roleAssignment/roleAssignment.js';
import validateAllowedRoles from '../../../validations/role/mandated/validateAllowedRoles/validateAllowedRoles.js';

export {
  express,
  roleAssignmentRoute,
  validateAllowedRoles,
};
