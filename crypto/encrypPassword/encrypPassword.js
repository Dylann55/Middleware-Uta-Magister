/* eslint-disable import/extensions */
import encryptNotObject from '../encryptNotObject/encryptNotObject.js';

const encrypPassword = (req, res) => {
  const decoded = req.body;
  try {
    const encryptedNotObject = encryptNotObject(decoded.password);
    res.json({ encryptedNotObject });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al desencriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
};
export default encrypPassword;
