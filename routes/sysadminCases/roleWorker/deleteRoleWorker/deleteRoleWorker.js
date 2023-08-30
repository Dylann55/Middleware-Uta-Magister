import { DeleteRoleWorker } from "../../../../repository/sysadminCases/rolesWorker/deleteRoleWorker.js";

const deleteRoleWorkerInstance = new DeleteRoleWorker();

const deleteRoleWorker = async (req, res) => {
    const dataBase = req.dataBase;
    const { workerID, roleID } = req.body;
    try {
        await deleteRoleWorkerInstance.deleteRoleWorker(dataBase, workerID, roleID);
        res.status(200).json({ verificationMessage: 'Se eliminó el Rol exitosamente' });
    } catch (error) {
        if (error.status = 409) {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ error });
        }
    }

}
export default deleteRoleWorker;
