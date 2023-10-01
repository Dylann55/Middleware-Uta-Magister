/* eslint-disable import/extensions */
import dencrypt from '../decrypt/decrypt.js';

const dencryptObject = (req, res, next) => {
  const decoded = req.body;
  try {
    const decryptedData = dencrypt(decoded);
    const decryptedObject = JSON.parse(decryptedData);
    req.body = decryptedObject;
    console.log(decryptedObject);
    next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al encriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
};
export default dencryptObject;
