/* eslint-disable max-len */
import CryptoJS from 'crypto-js';

function dencrypt(decoded) {
  const secretPasswordCrypto = process.env.SECRET_PASSWORD_CRYPTO;
  const bytes = CryptoJS.AES.decrypt(decoded.encryptedData, secretPasswordCrypto, { iv: decoded.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

export default dencrypt;
