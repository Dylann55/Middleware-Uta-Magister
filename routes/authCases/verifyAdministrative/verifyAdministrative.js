/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { GetUserAuth } from '../../../repository/utils/getUserAuth.js';
import { GetUser } from '../../../repository/utils/getUser.js';
import { SearchAdministrative } from '../../../repository/authCases/searchAdministrative.js';
import encodeToken from '../../../token/encodeToken/encodeToken.js';
import encryptObject from '../../../crypto/encryptObject/encryptObject.js';

const verifyAdministrative = async (req, res) => {
  const dataBase = req.dataBase;
  const { access_token } = req.body;
  const getUserAuthInstance = new GetUserAuth();
  const getUserInstance = new GetUser();
  const searchAdministrativeInstance = new SearchAdministrative();

  try {
    const userAuth = await getUserAuthInstance.getUserAuth(dataBase, access_token);

    if (!userAuth) {
      return res.status(400).json({ error: 'Credenciales inválidas: El token de acceso es incorrecto' });
    }

    const user = await getUserInstance.getUser(dataBase, userAuth.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const administrative = await searchAdministrativeInstance.searchAdministrative(dataBase, user.userID);

    if (!administrative) {
      return res.status(403).json({ error: 'No tienes permiso para ingresar' });
    }

    const data = encryptObject(access_token);
    const token = encodeToken({ data });
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default verifyAdministrative;
