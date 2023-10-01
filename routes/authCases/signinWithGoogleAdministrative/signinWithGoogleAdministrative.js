/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { GetUserAuth } from '../../../repository/utils/getUserAuth.js';
import { GetUser } from '../../../repository/utils/getUser.js';
import { SearchAdministrative } from '../../../repository/authCases/searchAdministrative.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const signinWithGoogleAdministrative = async (req, res) => {
  const dataBase = req.dataBase;
  const { access_token } = req.body;
  const getUserAuthInstance = new GetUserAuth();
  const getUserInstance = new GetUser();
  const searchAdministrativeInstance = new SearchAdministrative();
  try {
    const userAuth = await getUserAuthInstance.getUserAuth(dataBase, access_token);
    const user = await getUserInstance.getUser(dataBase, userAuth.id);
    const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.userID);
    if (!administrative) {
      const findError = new Error('No tienes permiso para ingresar');
      findError.status = 409;
      throw findError;
    }
    const data = encryptObject(access_token);
    res.status(200).json({ token: encodeToken({ data }) });
  } catch (error) {
    if (error.status === 400) {
      res.status(400).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default signinWithGoogleAdministrative;
