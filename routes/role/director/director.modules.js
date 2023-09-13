/* eslint-disable import/extensions */
import express from 'express';
import userRoute from './user/userRoute.js';
import roleHasUserRoute from './roleHasWorker/roleHasUserRoute.js';

export {
  express,
  userRoute,
  roleHasUserRoute,
};
