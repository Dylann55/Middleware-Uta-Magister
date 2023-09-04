/* eslint-disable import/extensions */
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import { AuthUser } from '../../../repository/authCases/authUser.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const signin = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;
  const authUser = new AuthUser();
  try {
    const session = encryptObject(await authUser.authUser(dataBase, email, password));
    res.status(200).json({ token: encodeToken({ session }) });
  } catch (error) {
    if (error.status === 400) {
      res.status(400).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default signin;
