/* eslint-disable import/extensions */
import { ApprovalSpecialization } from '../../../../../repository/handleSpecialization/specializationHasUser/approvalSpecialization.js';

const updateSpecializationHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const {
    userID, specializationHasUserID, statusID, semesterID,
  } = req.body;
  const approvalSpecializationInstance = new ApprovalSpecialization();
  try {
    await approvalSpecializationInstance.approvalSpecialization(dataBase, userID, specializationHasUserID, statusID, semesterID);
    res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default updateSpecializationHasUser;
