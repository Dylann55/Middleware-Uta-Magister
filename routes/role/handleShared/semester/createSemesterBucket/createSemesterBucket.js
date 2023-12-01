/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { CreateBucket } from '../../../../../repository/storage/bucket/createBucket.js';
import { SelectSpecialization } from '../../../../../repository/handleSpecialization/specialization/selectSpecialization.js';

const createSemesterBucket = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    semesterID,
  } = req.body;
  const createBucketInstance = new CreateBucket();
  const selectSpecializationInstance = new SelectSpecialization();
  try {
    const specializations = await selectSpecializationInstance.selectSpecialization(dataBase);

    for (const specialization of specializations) {
      const bucketLocationFirstStage = `FirstStage/${specialization.specializationID}`;
      await createBucketInstance.createBucket(dataBase, bucketLocationFirstStage, semesterID);

      const bucketLocationSecondStage = `SecondStage/${specialization.specializationID}`;
      await createBucketInstance.createBucket(dataBase, bucketLocationSecondStage, semesterID);
    }

    res.status(200).json({ verificationMessage: 'El Semestre fue subido exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createSemesterBucket;
