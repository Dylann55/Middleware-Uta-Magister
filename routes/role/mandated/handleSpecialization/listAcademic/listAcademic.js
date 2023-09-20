/* eslint-disable import/extensions */
import { SelectUser } from '../../../../../repository/roleAssignment/roleHasUser/selectUser.js';

const listAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const { roles } = req.body;
  const selectUserInstance = new SelectUser();
  try {
    const data = await selectUserInstance.selectUser(dataBase, roles.Academico);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listAcademic;
