/* eslint-disable import/extensions */
import express from 'express';
import userRoute from './user/userRoute.js';
import documentRoute from './document/document.js';
import handleSpecializationRoute from './handleSpecialization/handleSpecialization.js';

export {
  express,
  documentRoute,
  handleSpecializationRoute,
  userRoute,
};
