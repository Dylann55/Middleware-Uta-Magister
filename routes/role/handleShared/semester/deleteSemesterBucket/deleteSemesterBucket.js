/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { DeleteBucket } from '../../../../../repository/storage/bucket/deleteBucket.js';
import { SelectSpecialization } from '../../../../../repository/handleSpecialization/specialization/selectSpecialization.js';

const deleteSemesterBucket = async (req, res) => {
  const dataBase = req.dataBase;
  const { semesterIDs } = req.body;
  const deleteBucketInstance = new DeleteBucket();
  const selectSpecializationInstance = new SelectSpecialization();
  try {
    const specializations = await selectSpecializationInstance.selectSpecialization(dataBase);
    for (const semesterID of semesterIDs) {
      for (const specialization of specializations) {
        const bucketLocationFirstStage = `FirstStage/${specialization.specializationID}`;
        await deleteBucketInstance.createBucket(dataBase, bucketLocationFirstStage, semesterID);

        const bucketLocationSecondStage = `SecondStage/${specialization.specializationID}`;
        await deleteBucketInstance.createBucket(dataBase, bucketLocationSecondStage, semesterID);
      }
    }

    res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export default deleteSemesterBucket;
