/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectUserByUserID } from '../../../../../repository/roleAssignment/user/selectUserByUserID.js';

const listUserByUserID = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectUserByUserID = new SelectUserByUserID();
  try {
    const data = await selectUserByUserID.selectUserUserByUserID(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listUserByUserID;
