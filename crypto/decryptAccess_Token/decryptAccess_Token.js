import dencrypt from "../decrypt/decrypt.js";

const decryptAccess_Token = (req, res, next) => {
  const decoded = req.body;
  try {
    const decryptedData = dencrypt(decoded);
    decoded.access_token = decryptedData;
    req.body = decoded;
    next();
  } catch (error) {
    console.error('Error al desencriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
}
export default decryptAccess_Token;