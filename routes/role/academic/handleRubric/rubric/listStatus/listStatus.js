/* eslint-disable import/extensions */
import { SelectStatus } from '../../../../../../repository/handleSpecialization/status/selectStatus.js';

const listStatus = async (req, res) => {
  const dataBase = req.dataBase;
  const selectStatusInstance = new SelectStatus();
  try {
    const data = await selectStatusInstance.selectStatus(dataBase, [1, 2, 3, 4, 5]);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listStatus;
