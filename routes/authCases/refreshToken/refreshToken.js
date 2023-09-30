/* eslint-disable import/extensions */
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import { RefreshSession } from '../../../repository/authCases/refreshSession.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const refreshToken = async (req, res) => {
  const dataBase = req.dataBase;
  const { refresh_token } = req.body;
  const refreshSession = new RefreshSession();
  try {
    const data = encryptObject(await refreshSession.refreshSession(dataBase, refresh_token));
    res.status(200).json({ token: encodeToken(data) });
  } catch (error) {
    if (error.status === 400) {
      res.status(400).json({ message: 'Refresh token inválido o ya está usado' });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default refreshToken;
