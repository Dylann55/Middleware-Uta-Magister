/* eslint-disable import/extensions */
import { SelectRolesHasUser } from '../../../../../repository/director/roleHasUser/selectRolesHasUser.js';

const listRolesHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const selectRolesHasUserInstance = new SelectRolesHasUser();
  try {
    const data = await selectRolesHasUserInstance.selectRolesHasUser(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listRolesHasUser;
