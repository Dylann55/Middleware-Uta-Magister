/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/bodyAcademic/createUserHasTitle.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';

const createUserHasTitle = async (req, res, next) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    userID, formatID, titleID, titleYear,
  } = req.data;
  const bucketLocation = 'image/AcademicHasTitle';
  const createStorageInstance = new CreateStorage();
  const createUserHasTitleInstance = new CreateUserHasTitle();
  try {
    const documentTitle = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    const userHasTitle = await createUserHasTitleInstance.createUserHasTitle(dataBase, userID, formatID, titleID, documentTitle, titleYear);
    if (!userHasTitle) {
      return res.status(400).json({ error: 'No se puedo crear un título para el académico' });
    }
    req.data.userHasTitleID = userHasTitle.userHasTitleID;
    next();
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createUserHasTitle;
