/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/deleteUserHasTitle.js';
import { GetUserHasTitle } from '../../../../../../repository/handleTitle/userHasTitle/getUserHasTitle.js';
import { DeleteStorage } from '../../../../../../repository/storage/deleteStorage.js';
import getUniqueFileName from '../../../../../../repository/storage/getUniqueFileName.js';

const deleteUserHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const { userHasTitleIDs } = req.body;
  const bucketLocation = 'image';
  const getUserHasTitleInstance = new GetUserHasTitle();
  const deleteStorageInstance = new DeleteStorage();
  const deleteUserHasTitleInstance = new DeleteUserHasTitle();
  try {
    const documents = await getUserHasTitleInstance.getUserHasTitle(dataBase, userHasTitleIDs);
    const deletePromises = documents.map(async (document) => {
      const archive = document.documentTitle;
      const uniqueFileName = `Title/${getUniqueFileName(archive)}`;
      await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    });
    await Promise.all(deletePromises);
    await deleteUserHasTitleInstance.deleteUserHasTitle(dataBase, userHasTitleIDs);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteUserHasTitle;
