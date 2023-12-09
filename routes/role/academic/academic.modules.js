/* eslint-disable import/extensions */
import express from 'express';
import firstStageRoute from './firstStage/firstStage.js';
import secondStageRoute from './secondStage/secondStage.js';
import listSemester from '../handleShared/semester/listSemester/listSemester.js';
import handleRubric from '../handleShared/handleRubric/handleRubricRoute.js';

export {
  express,
  firstStageRoute,
  secondStageRoute,
  listSemester,
  handleRubric,
};
