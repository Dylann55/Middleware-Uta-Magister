/* eslint-disable import/extensions */
import { CreateEvaluate } from '../../../../../../repository/handleSpecialization/evaluate/createEvaluate.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';
import getTimestamp from '../../../../../../utils/getTimestamp.js';

const createEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    stage, stageID, specializationHasUserID, semesterID, specializationID, formatID,
  } = req.data;
  const bucketLocation = `image/${stage}/${specializationID}/${semesterID}`;
  const createStorageInstance = new CreateStorage();
  const createEvaluateInstance = new CreateEvaluate();
  try {
    const createdDate = getTimestamp();
    const beforeProyect = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await createEvaluateInstance.createEvaluate(dataBase, beforeProyect, formatID, specializationHasUserID, stageID, createdDate);
    res.status(200).json({ verificationMessage: 'El AnteProyecto fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createEvaluate;
