/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateSemester } from '../../../../../repository/handleSpecialization/semester/createSemester.js';

const createSemester = async (req, res, next) => {
  const dataBase = req.dataBase;
  const {
    semesterNumber, year, startDate, finishDate,
  } = req.body;
  const createSemesterInstance = new CreateSemester();
  try {
    const { semesterID } = await createSemesterInstance.createSemester(dataBase, semesterNumber, year, startDate, finishDate);
    req.body.semesterID = semesterID;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createSemester;
