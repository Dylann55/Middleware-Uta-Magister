/* eslint-disable import/extensions */
import express from 'express';
import rubricRoute from './rubric/rubricRoute.js';
import questionRoute from './question/questionRoute.js';
import rubricHasQuestionRoute from './rubricHasQuestion/rubricHasQuestionRoute.js';

export {
  express,
  rubricRoute,
  questionRoute,
  rubricHasQuestionRoute,
};
