/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/updateUserHasTitle.js';

const updateUserHasTitle = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    userHasTitleID, titleID, titleYear,
  } = req.body;
  const updateUserHasTitleInstance = new UpdateUserHasTitle();
  try {
    await updateUserHasTitleInstance.updateUserHasTitle(dataBase, userHasTitleID, titleID, titleYear);
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateUserHasTitle;
