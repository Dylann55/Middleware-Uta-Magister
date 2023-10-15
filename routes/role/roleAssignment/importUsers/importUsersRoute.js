/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import {
  express, processExcel, handleExcelUpload, inviteUsers, createUsers, createStudents,
} from './importUsersModules.js';

const importUsers = express.Router();

importUsers.post('/', handleExcelUpload, processExcel, inviteUsers, createUsers, createStudents);

export default importUsers;
