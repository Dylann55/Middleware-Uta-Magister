/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { AuthUser } from '../../../repository/authCases/authUser.js';
import { SearchAdministrative } from '../../../repository/authCases/searchAdministrative.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const signinAdministrative = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;
  const authUserInstance = new AuthUser();
  const searchAdministrativeInstance = new SearchAdministrative();
  try {
    const user = await authUserInstance.authUser(dataBase, email, password);
    const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.user.id);
    if (!administrative) {
      res.status(409).json({ errorDenied: 'No tienes permiso para ingresar' });
    }
    const data = encryptObject(user);
    res.status(200).json({ token: encodeToken({ data }) });
  } catch (error) {
    if (error.status === 400) {
      res.status(400).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default signinAdministrative;
