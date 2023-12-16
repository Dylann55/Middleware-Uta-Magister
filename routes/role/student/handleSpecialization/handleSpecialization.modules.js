/* eslint-disable import/extensions */
import express from 'express';
import specializationHasUserRoute from './specializationHasUser/specializationHasUser.js';
import specializationHasSemesterRoute from './specializationHasSemester/specializationHasSemester.js';
import evaluateRoute from './evaluate/evaluate.js';

export {
  express,
  specializationHasUserRoute,
  specializationHasSemesterRoute,
  evaluateRoute,
};
