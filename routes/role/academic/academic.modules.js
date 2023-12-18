/* eslint-disable import/extensions */
import express from 'express';
import firstStageRoute from './firstStage/firstStage.js';
import secondStageRoute from './secondStage/secondStage.js';
import thesisEvaluationRoute from './thesisEvaluation/thesisEvaluation.js';
import listSemester from '../handleShared/semester/listSemester/listSemester.js';
import handleRubricRoute from './handleRubric/handleRubricRoute.js';
import evaluateRoute from './evaluate/evaluate.js';

export {
  express,
  firstStageRoute,
  secondStageRoute,
  thesisEvaluationRoute,
  listSemester,
  handleRubricRoute,
  evaluateRoute,
};
