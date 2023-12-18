/* eslint-disable import/extensions */
import { SelectRolesHasUser } from '../../../../../repository/roleAssignment/roleHasUser/selectRolesHasUser.js';

const listMandated = async (req, res) => {
  const dataBase = req.dataBase;
  const selectRolesHasUserInstance = new SelectRolesHasUser();
  try {
    const data = await selectRolesHasUserInstance.selectRolesHasUser(dataBase, 'mandated');
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listMandated;
