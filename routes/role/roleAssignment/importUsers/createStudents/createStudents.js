/* eslint-disable import/extensions */
import { CreateStudents } from '../../../../../repository/import/createStudents.js';

const createStudents = async (req, res) => {
  const dataBase = req.dataBase;
  const excelData = req.excelData;
  const createStudentsInstance = new CreateStudents();
  try {
    await createStudentsInstance.createStudents(dataBase, excelData);
    res.status(200).json({ verificationMessage: 'Los datos han sido subidos exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};

export default createStudents;
