/* eslint-disable import/extensions */
import decodeToken from '../decodeToken/decodeToken.js';

const validateToken = (req, res, next) => {
  console.log(req);
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) { return res.status(401).json({ message: 'No se proporciono el token' }); }

  try {
    const decoded = decodeToken(token);
    req.body = decoded;
    next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error al decodificar el token:', error);
    return res.status(401).json({ message: 'El token es inválido' });
  }
};

export default validateToken;
