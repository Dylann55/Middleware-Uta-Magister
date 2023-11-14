/* eslint-disable import/extensions */
import { SelectType } from '../../../../../../repository/handleTitle/type/selectType.js';

const listType = async (req, res) => {
  const dataBase = req.dataBase;
  const selectTypeInstance = new SelectType();
  try {
    const data = await selectTypeInstance.selectType(dataBase);
    res.status(200).json(data);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default listType;
