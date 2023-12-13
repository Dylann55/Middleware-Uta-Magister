/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/createUserHasTitle.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';

const createUserHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    userID, formatID, titleID,
  } = req.data;
  const bucketLocation = 'image/Title';
  const createStorageInstance = new CreateStorage();
  const createUserHasTitleInstance = new CreateUserHasTitle();
  try {
    const documentTitle = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await createUserHasTitleInstance.createUserHasTitle(dataBase, userID, formatID, titleID, documentTitle);
    res.status(200).json({ verificationMessage: 'El título fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createUserHasTitle;
