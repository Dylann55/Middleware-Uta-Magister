/* eslint-disable import/extensions */
import { SelectUser } from '../../../../../repository/roleAssignment/user/selectUser.js';

const listUser = async (req, res) => {
  const dataBase = req.dataBase;
  const selectUserInstance = new SelectUser();
  try {
    const data = await selectUserInstance.selectUser(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listUser;
