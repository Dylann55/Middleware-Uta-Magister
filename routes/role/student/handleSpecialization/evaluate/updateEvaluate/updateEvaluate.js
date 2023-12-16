/* eslint-disable import/extensions */
import { UpdateEvaluate } from '../../../../../../repository/handleSpecialization/evaluate/updateEvaluate.js';
import { CreateStorage } from '../../../../../../repository/storage/createStorage.js';
import getTimestamp from '../../../../../../utils/getTimestamp.js';

const updateEvaluate = async (req, res) => {
  const dataBase = req.dataBase;
  const file = req.file;
  const {
    stageID, typeEvaluateID, evaluateID, semesterID, specializationID, formatID,
  } = req.data;
  const bucketLocation = `image/Evaluate/${stageID}/${specializationID}/${typeEvaluateID}/${semesterID}`;
  const createStorageInstance = new CreateStorage();
  const updateEvaluateInstance = new UpdateEvaluate();
  try {
    const updateDate = getTimestamp();
    const projectURL = await createStorageInstance.createStorage(dataBase, bucketLocation, file);
    await updateEvaluateInstance.updateEvaluate(dataBase, evaluateID, projectURL, formatID, updateDate);
    res.status(200).json({ verificationMessage: 'El AnteProyecto fue actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateEvaluate;
