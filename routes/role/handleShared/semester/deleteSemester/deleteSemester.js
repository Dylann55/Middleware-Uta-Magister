/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteSemester } from '../../../../../repository/handleSpecialization/semester/deleteSemester.js';

const deleteSemester = async (req, res) => {
  const dataBase = req.dataBase;
  const { semesterIDs } = req.body;
  const deleteSemesterInstance = new DeleteSemester();
  try {
    await deleteSemesterInstance.deleteSemester(dataBase, semesterIDs);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteSemester;
