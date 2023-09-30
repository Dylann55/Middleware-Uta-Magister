/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectUserByEmail } from '../../../../../repository/roleAssignment/user/selectUserByEmail.js';
import { CreateUserAuth } from '../../../../../repository/roleAssignment/user/createUserAuth.js';

const createUserAuth = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { email } = req.body;
  const selectUserByEmailInstance = new SelectUserByEmail();
  const createUserAuthInstance = new CreateUserAuth();
  try {
    const user = await selectUserByEmailInstance.selectUserByEmail(dataBase, email);
    if (!user) {
      const userAuth = await createUserAuthInstance.createUserAuth(dataBase, email, process.env.URL_RESET_PASSWORD);
      if (!userAuth) {
        const findError = new Error('No se creo el usuario autenticado');
        findError.status = 409;
        throw findError;
      }
      req.id = userAuth.id;
      next();
    } else {
      res.status(500).json({ error: 'El usuario ya existe' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createUserAuth;
