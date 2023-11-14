/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectTitleHasUniversity } from '../../../../../../repository/handleTitle/title/selectTitleHasUniversity.js';

const listTitleHasUniversity = async (req, res) => {
  const dataBase = req.dataBase;
  const selectTitleHasUniversityInstance = new SelectTitleHasUniversity();
  try {
    const data = await selectTitleHasUniversityInstance.selectTitleHasUniversity(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listTitleHasUniversity;
