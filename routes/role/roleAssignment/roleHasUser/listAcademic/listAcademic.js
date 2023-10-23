/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectRolesHasUser } from '../../../../../repository/roleAssignment/roleHasUser/selectRolesHasUser.js';

const listAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const selectRolesHasUserInstance = new SelectRolesHasUser();
  try {
    const data = await selectRolesHasUserInstance.selectRolesHasUser(dataBase, 'academic');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listAcademic;
