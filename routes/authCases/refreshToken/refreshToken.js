import encodeToken from "../../../token/encodeToken/encodeToken.js";
import { RefreshSession } from '../../../repository/authCases/refreshSession.js';

const refreshSession = new RefreshSession();

const refreshToken = async (req, res) => {
  const dataBase = req.dataBase;   
  const secret = process.env.SECRET_PASSWORD;
  const { refresh_token } = req.body;
  try {
    const data = await refreshSession.refreshSession(dataBase, refresh_token);
    res.status(200).json({ token: encodeToken(data, secret) });        

  } catch (error) {
    if (error.status == 400) {
      res.status(400).json({ verificationMessage: 'Refresh token inválido o ya está usado' });
    } else {
      res.status(500).json({ error });        
    }
  }
}

export default refreshToken;
