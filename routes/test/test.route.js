/* eslint-disable import/extensions */
import {
  express, validateToken, encrypPassword, encryptObjectRequest, dencryptSession, processDataBase, processExcel, handleExcelUpload, inviteUsers, createUsers, createStudents,
} from './test.modules.js';

const testRoute = express.Router();

testRoute.post('/descryptSession', validateToken, dencryptSession);
testRoute.post('/encryptPassword', validateToken, encrypPassword);
testRoute.post('/encryptObjectRequest', encryptObjectRequest);
testRoute.post('/importExcel', handleExcelUpload, processExcel, inviteUsers, createUsers, createStudents);

export default testRoute;
