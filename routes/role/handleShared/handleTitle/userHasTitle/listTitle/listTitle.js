/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectTitle } from '../../../../../../repository/handleTitle/title/selectTitle.js';

const listTitleHasUniversity = async (req, res) => {
  const dataBase = req.dataBase;
  const selectTitleInstance = new SelectTitle();
  try {
    const data = await selectTitleInstance.selectTitle(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listTitleHasUniversity;
