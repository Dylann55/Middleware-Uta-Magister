/* eslint-disable import/extensions */
import { CreateUser } from '../../../../../repository/roleAssignment/user/createUser.js';

const createUser = async (req, res, next) => {
  const dataBase = req.dataBase;
  const id = req.id;
  const {
    rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone,
  } = req.body;
  const createUserInstance = new CreateUser();
  try {
    const user = await createUserInstance.createUser(dataBase, id, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone);
    if (!user) {
      const findError = new Error('No se creo el usuario');
      findError.status = 409;
      throw findError;
    }
    req.userID = user.userID;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createUser;