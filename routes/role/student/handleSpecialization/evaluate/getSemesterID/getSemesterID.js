/* eslint-disable import/extensions */
import { SelectSemester } from '../../../../../../repository/handleSpecialization/semester/selectSemester.js';

const getSemesterID = async (req, res, next) => {
  const dataBase = req.dataBase;
  const selectSemesterInstance = new SelectSemester();
  try {
    const data = await selectSemesterInstance.selectSemester(dataBase);
    data.sort((a, b) => new Date(b.finishDate) - new Date(a.finishDate));
    req.body.semesterID = data[0].semesterID;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default getSemesterID;
