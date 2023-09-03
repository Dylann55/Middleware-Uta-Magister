import { AuthUser } from "../../../repository/authCases/authUser.js";
import encryptNotObject from "../../../crypto/encryptNotObject/encryptNotObject.js";

const signinTest = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;
  const authUser = new AuthUser();
  try {
    const decryptedObject = await authUser.authUser(dataBase, email, password);
    const decryptedAccess_token = encryptNotObject(decryptedObject.access_token);
    const decryptedRefresh_token = encryptNotObject(decryptedObject.refresh_token);
    decryptedObject.decryptedAccess_token = decryptedAccess_token;
    decryptedObject.decryptedRefresh_token = decryptedRefresh_token;
    res.json({ decryptedObject });
  } catch (error) {
    console.error('Credenciales inválidas: ', error.message);
    res.status(401).json({ error: 'Credenciales inválidas', message: error.message });
  }
}

export default signinTest;
