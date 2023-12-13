/* eslint-disable import/extensions */
import { SelectUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/selectUserHasTitle.js';

const listUserHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectUserHasTitleInstance = new SelectUserHasTitle();
  try {
    const data = await selectUserHasTitleInstance.selectUserHasTitle(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listUserHasTitle;
