/* eslint-disable import/extensions */
import {
  express, signin, signinWithGoogle, recoverPassword, refreshToken, signinTest, dencryptObject, validateToken, validateRefreshToken, validateEmail, validatePassword,
} from './auth.modules.js';

const authRoute = express.Router();

authRoute.post('/signinWithEmail', validateToken, dencryptObject, validateEmail, validatePassword, signin);
authRoute.get('/signinWithGoogle', signinWithGoogle);
authRoute.post('/recoverPassword', validateToken, validateEmail, recoverPassword);
authRoute.get('/refreshToken', validateToken, dencryptObject, validateRefreshToken, refreshToken);

authRoute.post('/signinTest', validateToken, validateEmail, validatePassword, signinTest);
export default authRoute;
