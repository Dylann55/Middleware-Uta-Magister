/* eslint-disable import/extensions */
import { CreateStorage } from '../../../../../repository/storage/createStorage.js';
import { CreateEvaluate } from '../../../../../repository/storage/evaluate/createEvaluate.js';
import { CreateEvaluateHasUser } from '../../../../../repository/handleSpecialization/evaluateHasUser/createEvaluateHasUser.js';
import { GetStatus } from '../../../../../repository/handleSpecialization/getStatus.js';

const createEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const { specializationHasUserID, formatID } = req.data;
  const bucketLocation = 'image/Evaluate';
  const createStorageInstance = new CreateStorage();
  const createEvaluateInstance = new CreateEvaluate();
  const createEvaluateHasUserInstance = new CreateEvaluateHasUser();
  const getStatusInstance = new GetStatus();
  try {
    const status = await getStatusInstance.getStatus(dataBase);
    const archive = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    const data = await createEvaluateInstance.createEvaluate(dataBase, archive, formatID, specializationHasUserID);
    await createEvaluateHasUserInstance.createEvaluateHasUser(dataBase, data.evaluateID, status['En Espera']);
    res.status(200).json({ verificationMessage: 'El documento fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createEvaluate;
