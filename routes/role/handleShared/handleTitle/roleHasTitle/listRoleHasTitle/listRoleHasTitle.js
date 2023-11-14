/* eslint-disable import/extensions */
import { SelectRoleHasTitle } from '../../../../../../repository/handleTitle/roleHasTitle/selectRoleHasTitle.js';

const listRoleHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectRoleHasTitleInstance = new SelectRoleHasTitle();
  try {
    const data = await selectRoleHasTitleInstance.selectRoleHasTitle(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listRoleHasTitle;
