/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { SignInWithOAuth } from '../../../repository/authCases/signinWithOAuth.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';

const signinWithGoogle = async (req, res) => {
  const dataBase = req.dataBase;
  const signInWithOAuth = new SignInWithOAuth();
  try {
    const data = await signInWithOAuth.signInWithOAuth(dataBase, 'google', process.env.URL_SOCIAL_REDIRECT);
    res.status(200).json({ token: encodeToken(data) });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default signinWithGoogle;
