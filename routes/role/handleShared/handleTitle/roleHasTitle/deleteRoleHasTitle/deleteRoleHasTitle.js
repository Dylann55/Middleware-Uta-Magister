/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteRoleHasTitle } from '../../../../../../repository/handleTitle/roleHasTitle/deleteRoleHasTitle.js';
import { GetRoleHasTitle } from '../../../../../../repository/handleTitle/roleHasTitle/getRoleHasTitle.js';
import { DeleteStorage } from '../../../../../../repository/storage/deleteStorage.js';
import getUniqueFileName from '../../../../../../repository/storage/getUniqueFileName.js';

const deleteRoleHasTitle = async (req, res) => {
  const dataBase = req.dataBase;
  const { roleHasTitleIDs } = req.body;
  const bucketLocation = 'image';
  const getRoleHasTitleInstance = new GetRoleHasTitle();
  const deleteStorageInstance = new DeleteStorage();
  const deleteRoleHasTitleInstance = new DeleteRoleHasTitle();
  try {
    const documents = await getRoleHasTitleInstance.getDocument(dataBase, roleHasTitleIDs);
    const deletePromises = documents.map(async (document) => {
      const archive = document.documentTitle;
      const uniqueFileName = `Title/${getUniqueFileName(archive)}`;
      await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);
    });
    await Promise.all(deletePromises);
    await deleteRoleHasTitleInstance.deleteRoleHasTitle(dataBase, roleHasTitleIDs);

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteRoleHasTitle;
