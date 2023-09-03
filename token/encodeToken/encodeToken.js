import jwt from "jsonwebtoken";

function encodeToken(payload) {
  const privateKeyJWT = JSON.parse(process.env.PRIVATE_KEY_JWT).value;
  const options = {
    expiresIn: "1h",
    algorithm: "RS256"
  };
  const token = jwt.sign(payload, privateKeyJWT, options);
  return token;
}

export default encodeToken;