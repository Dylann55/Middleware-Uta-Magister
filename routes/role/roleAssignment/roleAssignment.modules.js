/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from 'express';
import userRoute from './user/userRoute.js';
import roleHasUserRoute from './roleHasUser/roleHasUserRoute.js';
import importUsers from './importUsers/importUsersRoute.js';
import documentRoute from './document/document.js';

export {
  express,
  userRoute,
  roleHasUserRoute,
  importUsers,
  documentRoute,
};
