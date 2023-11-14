/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { UpdateTitle } from '../../../../../../repository/handleTitle/title/updateTitle.js';

const updateTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    titleID, name, typeID, universityID,
  } = req.body;
  const updateTitleInstance = new UpdateTitle();
  try {
    await updateTitleInstance.updateTitle(dataBase, titleID, name, typeID, universityID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateTitle;
