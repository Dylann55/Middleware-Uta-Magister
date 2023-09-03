import encryptNotObject from "../encryptNotObject/encryptNotObject.js";

const encrypPassword = (req, res, next) => {
  const decoded = req.body;
  try {
    const encryptedNotObject = encryptNotObject(decoded.password);
    res.json({ encryptedNotObject });
  } catch (error) {
    console.error('Error al desencriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
}
export default encrypPassword;