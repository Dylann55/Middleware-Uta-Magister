/* eslint-disable import/extensions */
import {
  express, validateToken, encrypPassword, dencryptSession,
} from './test.modules.js';

const testRoute = express.Router();

testRoute.post('/descryptSession', validateToken, dencryptSession);
testRoute.post('/encryptPassword', validateToken, encrypPassword);

export default testRoute;
