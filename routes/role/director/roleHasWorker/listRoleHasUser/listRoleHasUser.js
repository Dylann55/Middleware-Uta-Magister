/* eslint-disable import/extensions */
import { SelectRoleHasUser } from '../../../../../repository/director/roleHasUser/selectRoleHasUser.js';

const listRoleHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectRoleHasUserInstance = new SelectRoleHasUser();
  try {
    const data = await selectRoleHasUserInstance.selectRoleHasUser(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listRoleHasUser;
