/* eslint-disable import/extensions */
import express from 'express';
import directorRoute from './director/director.js';
import mandatedRoute from './mandated/mandated.js';
import verifyDirector from '../../verify/verifyDirector/verifyDirector.js';
import verifyMandated from '../../verify/verifyMandated/verifyMandated.js';

export {
  express,
  directorRoute,
  mandatedRoute,
  verifyDirector,
  verifyMandated,
};
