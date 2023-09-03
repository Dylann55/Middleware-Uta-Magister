import { SelectRolesWorker } from "../../../../repository/sysadminCases/rolesWorker/selectRolesWorker.js";

const listAllRoleWorker = async (req, res) => {
    const dataBase = req.dataBase;
    const selectRolesWorkerInstance = new SelectRolesWorker();
    try {
        const data = await selectRolesWorkerInstance.selectRolesWorker(dataBase);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
}
export default listAllRoleWorker;