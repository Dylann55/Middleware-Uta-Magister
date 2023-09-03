import dencrypt from "../decrypt/decrypt.js";

const decryptRefreshToken = (req, res, next) => {
  const decoded = req.body;
  try {
    const decryptedData = dencrypt(decoded);
    decoded.refresh_token = decryptedData;
    req.body = decoded;
    next();
  } catch (error) {
    console.error('Error al desencriptar:', error);
    return res.status(401).json({ message: 'El dato encriptado es inválido' });
  }
}
export default decryptRefreshToken;