import { SignInWithOAuth } from '../../../repository/authCases/signinWithOAuth.js';

const signInWithOAuth = new SignInWithOAuth();

const signinWithGoogle = async (req, res) => {
  const dataBase = req.dataBase;
  try {
    const data = await signInWithOAuth.signInWithOAuth(dataBase, 'google', process.env.URL_SOCIAL_REDIRECT);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default signinWithGoogle;
