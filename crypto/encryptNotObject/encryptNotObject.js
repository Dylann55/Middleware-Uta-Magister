import CryptoJS from 'crypto-js';

function encryptObject(payload) {
  const secretPasswordCrypto = process.env.SECRET_PASSWORD_CRYPTO;
  const iv = CryptoJS.lib.WordArray.random(16);
  const encryptedData = CryptoJS.AES.encrypt(payload, secretPasswordCrypto, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
  const encryptedNotObject = {
    encryptedData: encryptedData.toString(),
    iv: iv.toString(),
  };
  return encryptedNotObject;
}
export default encryptObject;
