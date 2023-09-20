/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectRoleHasUser } from '../../../../../repository/roleAssignment/roleHasUser/selectRoleHasUser.js';

const listRoleHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, allowedRoles } = req.body;
  const selectRoleHasUserInstance = new SelectRoleHasUser();
  try {
    const data = await selectRoleHasUserInstance.selectRoleHasUser(dataBase, userID, allowedRoles);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listRoleHasUser;
