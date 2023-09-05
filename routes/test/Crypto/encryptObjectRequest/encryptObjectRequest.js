/* eslint-disable import/extensions */
import encryptObject from '../../../../crypto/encryptObject/encryptObject.js';

const encryptObjectRequest = (req, res) => {
  const decoded = req.body;
  try {
    const encryptedObject = encryptObject(decoded);
    res.json({ encryptedObject });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al desencriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
};
export default encryptObjectRequest;
