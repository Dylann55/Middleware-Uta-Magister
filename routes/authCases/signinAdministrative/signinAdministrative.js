/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { AuthUser } from '../../../repository/authCases/authUser.js';
import { GetUser } from '../../../repository/utils/getUser.js';
import { SearchAdministrative } from '../../../repository/authCases/searchAdministrative.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const signinAdministrative = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;
  const authUserInstance = new AuthUser();
  const getUserInstance = new GetUser();
  const searchAdministrativeInstance = new SearchAdministrative();
  try {
    const data = await authUserInstance.authUser(dataBase, email, password);
    const user = await getUserInstance.getUser(dataBase, data.user.id);
    const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.userID);
    if (!administrative) {
      const findError = new Error('No tienes permiso para ingresar');
      findError.status = 409;
      throw findError;
    }
    const session = encryptObject(data);
    res.status(200).json({ token: encodeToken({ session }) });
  } catch (error) {
    if (error.status === 400) {
      res.status(400).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default signinAdministrative;
