import { express, signup, signin, signinWithGoogle, recoverPassword, refreshToken, signinTest, decryptPassword, decryptRefreshToken, validateToken, validateRefreshToken, validateEmail, validatePassword } from "./auth.modules.js";

const authRoute = express.Router();

authRoute.post('/signupWithEmail', validateToken, validateEmail, validatePassword, signup);
authRoute.post('/signinWithEmail', validateToken, decryptPassword, validateEmail, validatePassword, signin);
authRoute.get('/signinWithGoogle', signinWithGoogle);
authRoute.post('/recoverPassword', validateToken, validateEmail, recoverPassword);
authRoute.get('/refreshToken', validateToken, decryptRefreshToken, validateRefreshToken, refreshToken);

authRoute.post('/signinTest', validateToken, validateEmail, validatePassword, signinTest);
export default authRoute;