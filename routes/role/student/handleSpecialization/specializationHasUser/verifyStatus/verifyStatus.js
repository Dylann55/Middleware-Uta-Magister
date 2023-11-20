/* eslint-disable import/extensions */
import { GetSemester } from '../../../../../../repository/handleSpecialization/semester/getSemester.js';
import getTimestamp from '../../../../../../repository/utils/getTimestamp.js';

const verifyEvaluateSemester = async (req, res, next) => {
  const dataBase = req.dataBase;
  const { semesterID } = req.body;
  const getSemesterInstance = new GetSemester();
  try {
    const { startDate, finishDate } = await getSemesterInstance.getSemester(dataBase, semesterID);
    const timestamp = getTimestamp();

    const startDateObj = new Date(startDate);
    const finishDateObj = new Date(finishDate);
    const timestampObj = new Date(timestamp);

    if (timestampObj >= startDateObj && timestampObj <= finishDateObj) {
      next();
    } else {
      return res.status(409).json({ error: 'El tiempo está fuera del periodo del semestre' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default verifyEvaluateSemester;
