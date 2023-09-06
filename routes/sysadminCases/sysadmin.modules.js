/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import userRoute from './users/userRoute.js';
import roleWorkerRoute from './roleWorker/roleWorkerModules.js';

export {
  express,
  userRoute,
  roleWorkerRoute,
};
