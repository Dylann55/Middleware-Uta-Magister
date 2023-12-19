/* eslint-disable import/extensions */
import { SelectBodyAcademic } from '../../../../../../repository/handleTitle/bodyAcademic/selectBodyAcademic.js';

const listBodyAcademic = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID } = req.body;
  const selectBodyAcademicInstance = new SelectBodyAcademic();
  try {
    const data = await selectBodyAcademicInstance.selectBodyAcademic(dataBase, userID);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listBodyAcademic;
