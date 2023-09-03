import jwt from 'jsonwebtoken';

function decodeToken(token) {
  const options = {
    expiresIn: "1h",
    algorithm: "RS256"
  };
  const publicKeyJWT = JSON.parse(process.env.PUBLIC_KEY_JWT).value;
  const decoded = jwt.verify(token, publicKeyJWT, options);
  return decoded;
}
export default decodeToken;  