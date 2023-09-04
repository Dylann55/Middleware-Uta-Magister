/* eslint-disable import/extensions */
import { GetRole } from '../../../../repository/utils/getRole.js';

const listAllRoles = async (req, res) => {
  const dataBase = req.dataBase;
  const getRoleInstance = new GetRole();
  try {
    const data = await getRoleInstance.getRole(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listAllRoles;
