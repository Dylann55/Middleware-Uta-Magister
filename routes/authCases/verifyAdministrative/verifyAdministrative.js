/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { GetUserAuth } from '../../../repository/utils/getUserAuth.js';
import { SearchAdministrative } from '../../../repository/authCases/searchAdministrative.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const verifyAdministrative = async (req, res) => {
  const dataBase = req.dataBase;
  const { access_token } = req.body;
  const getUserAuthInstance = new GetUserAuth();
  const searchAdministrativeInstance = new SearchAdministrative();

  try {
    const user = await getUserAuthInstance.getUserAuth(dataBase, access_token);
    if (!user) {
      return res.status(400).json({ error: 'Credenciales inválidas: El token de acceso es incorrecto' });
    }
    const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.id);
    if (!administrative) {
      return res.status(403).json({ errorDenied: 'No tienes permiso para ingresar' });
    }
    const data = encryptObject(access_token);
    res.status(200).json({ token: encodeToken({ data }) });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default verifyAdministrative;
