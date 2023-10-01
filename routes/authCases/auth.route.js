/* eslint-disable import/extensions */
import {
  express, signin, signinWithGoogle, recoverPassword, changePassword, refreshToken, signinAdministrative, signinWithGoogleAdministrative, signinTest, handleAuth, validateToken, validateAccessToken, validateRefreshToken, validateEmail, validatePassword,
} from './auth.modules.js';

const authRoute = express.Router();

authRoute.post('/signinWithEmail', handleAuth, validateEmail, validatePassword, signin);
authRoute.get('/signinWithGoogle', signinWithGoogle);
authRoute.post('/recoverPassword', handleAuth, validateEmail, recoverPassword);
authRoute.post('/changePassword', handleAuth, validateAccessToken, validatePassword, changePassword);
authRoute.post('/refreshToken', handleAuth, validateRefreshToken, refreshToken);
authRoute.post('/administrative/signinWithEmail', handleAuth, validateEmail, validatePassword, signinAdministrative);
authRoute.post('/administrative/signinWithGoogle', handleAuth, validateAccessToken, signinWithGoogleAdministrative);

authRoute.post('/signinTest', validateToken, validateEmail, validatePassword, signinTest);
export default authRoute;
