/* eslint-disable import/extensions */
import { DeleteAllRoleWorker } from '../../../../repository/sysadminCases/rolesWorker/deleteAllRoleWorker.js';

const deleteAllRoleWorker = async (req, res) => {
  const dataBase = req.dataBase;
  const { userIDs } = req.body;
  const deleteAllRoleWorkerInstance = new DeleteAllRoleWorker();
  try {
    const deletePromises = userIDs.map(async (userID) => {
      await deleteAllRoleWorkerInstance.deleteAllRoleWorker(dataBase, userID);
    });

    await Promise.all(deletePromises);

    res.status(200).json({ verificationMessage: 'Se elimino al Trabajador' });
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default deleteAllRoleWorker;
