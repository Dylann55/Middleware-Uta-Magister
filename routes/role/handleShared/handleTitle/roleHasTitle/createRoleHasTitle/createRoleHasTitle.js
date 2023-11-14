/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateRoleHasTitle } from '../../../../../../repository/handleTitle/roleHasTitle/createRoleHasTitle.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';

const createRoleHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    userID, formatID, titleID,
  } = req.data;
  const bucketLocation = 'image/Title';
  const createStorageInstance = new CreateStorage();
  const createRoleHasTitleInstance = new CreateRoleHasTitle();
  try {
    const documentTitle = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await createRoleHasTitleInstance.createRoleHasTitle(dataBase, userID, formatID, titleID, documentTitle);
    res.status(200).json({ verificationMessage: 'El título fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRoleHasTitle;
