/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteTitle } from '../../../../../../repository/handleTitle/title/deleteTitle.js';

const deleteTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const { titleIDs } = req.body;
  const deleteTitleInstance = new DeleteTitle();
  try {
    await deleteTitleInstance.deleteTitle(dataBase, titleIDs);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteTitle;
