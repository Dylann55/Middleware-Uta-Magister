/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { GetRole } from '../../../../../repository/roleAssignment/roleHasUser/getRole.js';

const listAllRole = async (req, res) => {
  const dataBase = req.dataBase;
  const getRoleInstance = new GetRole();
  const { allowedRoles } = req.body;
  try {
    const data = await getRoleInstance.getRole(dataBase, allowedRoles);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listAllRole;
