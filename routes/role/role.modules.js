/* eslint-disable import/extensions */
import express from 'express';
import directorRoute from './director/director.js';
import mandatedRoute from './mandated/mandated.js';
import studentRoute from './student/student.js';
import academicRoute from './academic/academic.js';
import verifyDirector from '../../verify/verifyDirector/verifyDirector.js';
import verifyMandated from '../../verify/verifyMandated/verifyMandated.js';
import verifyAcademic from '../../verify/verifyAcademic/verifyAcademic.js';
import verifyStudent from '../../verify/verifyStudent/verifyStudent.js';

export {
  express,
  academicRoute,
  directorRoute,
  mandatedRoute,
  studentRoute,
  verifyAcademic,
  verifyDirector,
  verifyMandated,
  verifyStudent,
};
