/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { SelectSemester } from '../../../../../repository/handleSpecialization/semester/selectSemester.js';

const listSemester = async (req, res) => {
  const dataBase = req.dataBase;
  const selectSemesterInstance = new SelectSemester();
  try {
    const data = await selectSemesterInstance.selectSemester(dataBase);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default listSemester;
