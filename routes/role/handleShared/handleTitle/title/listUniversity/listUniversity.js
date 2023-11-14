/* eslint-disable import/extensions */
import { SelectUniversity } from '../../../../../../repository/handleTitle/university/selectUniversity.js';

const listUniversity = async (req, res) => {
  const dataBase = req.dataBase;
  const selectUniversityInstance = new SelectUniversity();
  try {
    const data = await selectUniversityInstance.selectUniversity(dataBase);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listUniversity;
