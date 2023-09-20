/* eslint-disable import/extensions */
import { DeleteStorage } from '../../../../../repository/storage/deleteStorage.js';
import { DeleteSpecializationHasUser } from '../../../../../repository/handleSpecialization/specializationHasUser/deleteSpecializationHasUser.js';
import { DeleteEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/deleteEvaluateHasUser.js';
import { DeleteEvaluate } from '../../../../../repository/storage/evaluate/deleteEvaluate.js';

import getUniqueFileName from '../../../../../repository/storage/getUniqueFileName.js';

const deleteSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { evaluateID, specializationHasUserID, beforeProyect } = req.body;
  const bucketLocation = 'image';
  const deleteStorageInstance = new DeleteStorage();
  const deleteSpecializationHasUserInstance = new DeleteSpecializationHasUser();
  const deleteEvaluateHasUserInstance = new DeleteEvaluateHasUser();
  const deleteEvaluateInstance = new DeleteEvaluate();
  try {
    const uniqueFileName = `Evaluate/${getUniqueFileName(beforeProyect)}`;
    await deleteEvaluateHasUserInstance.deleteEvaluateHasUser(dataBase, evaluateID);
    await deleteEvaluateInstance.deleteEvaluate(dataBase, evaluateID);
    await deleteSpecializationHasUserInstance.deleteSpecializationHasUser(dataBase, specializationHasUserID);
    await deleteStorageInstance.deleteStorage(dataBase, bucketLocation, uniqueFileName);

    res.status(200).json({ verificationMessage: 'El documento se ha eliminado exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteSpecializationHasUser;
