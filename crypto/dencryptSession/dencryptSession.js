/* eslint-disable import/extensions */
import CryptoJS from 'crypto-js';
import encryptNotObject from '../encryptNotObject/encryptNotObject.js';

const dencryptSession = (req, res) => {
  const decoded = req.body;
  const secretPasswordCrypto = process.env.SECRET_PASSWORD_CRYPTO;
  try {
    // eslint-disable-next-line max-len
    const bytes = CryptoJS.AES.decrypt(decoded.session.encryptedData, secretPasswordCrypto, { iv: decoded.session.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    const decryptedObject = JSON.parse(decryptedData);
    const decryptedAccesstoken = encryptNotObject(decryptedObject.access_token);
    const decryptedRefreshtoken = encryptNotObject(decryptedObject.refresh_token);
    decryptedObject.decryptedAccess_token = decryptedAccesstoken;
    decryptedObject.decryptedRefresh_token = decryptedRefreshtoken;
    res.json({ decryptedObject });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al encriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
};
export default dencryptSession;
