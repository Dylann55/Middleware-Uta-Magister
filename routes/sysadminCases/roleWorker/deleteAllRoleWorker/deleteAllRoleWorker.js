import { DeleteAllRoleWorker } from "../../../../repository/sysadminCases/rolesWorker/deleteAllRoleWorker.js";

const deleteAllRoleWorkerInstance = new DeleteAllRoleWorker();

const deleteAllRoleWorker = async (req, res) => {
    const dataBase = req.dataBase;
    const { userID } = req.body;
    try {
        await deleteAllRoleWorkerInstance.deleteAllRoleWorker(dataBase, userID);
        res.status(200).json({ verificationMessage: 'Se elimino al Trabajador' });
    } catch (error) {
        if (error.status = 409) {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ error });
        }
    }

}
export default deleteAllRoleWorker;
