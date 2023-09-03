import CryptoJS from 'crypto-js';
import encryptNotObject from "../encryptNotObject/encryptNotObject.js";

const dencryptSession = (req, res, next) => {
    const decoded = req.body;
    const secretPasswordCrypto = process.env.SECRET_PASSWORD_CRYPTO;
    try {
        const bytes = CryptoJS.AES.decrypt(decoded.session.encryptedData, secretPasswordCrypto, { iv: decoded.session.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        const decryptedObject = JSON.parse(decryptedData);
        const decryptedAccess_token = encryptNotObject(decryptedObject.access_token);
        const decryptedRefresh_token = encryptNotObject(decryptedObject.refresh_token);
        decryptedObject.decryptedAccess_token = decryptedAccess_token;
        decryptedObject.decryptedRefresh_token = decryptedRefresh_token;
        res.json({ decryptedObject });
    } catch (error) {
        console.error('Error al encriptar:', error);
        return res.status(401).json({ message: 'El dato encriptado es inválido' });
    }
}
export default dencryptSession;

