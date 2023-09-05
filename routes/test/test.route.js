/* eslint-disable import/extensions */
import {
  express, validateToken, encrypPassword, encryptObjectRequest, dencryptSession,
} from './test.modules.js';

const testRoute = express.Router();

testRoute.post('/descryptSession', validateToken, dencryptSession);
testRoute.post('/encryptPassword', validateToken, encrypPassword);
testRoute.post('/encryptObjectRequest', encryptObjectRequest);

export default testRoute;
