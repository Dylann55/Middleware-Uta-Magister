import { SelectRoleWorker } from "../../../../repository/sysadminCases/rolesWorker/selectRoleWorker.js";

const selectRoleWorkerInstance = new SelectRoleWorker();

const listRoleWorker = async (req, res) =>{
    const dataBase = req.dataBase;
    const { workerID } = req.body;
    try {
        const data = await selectRoleWorkerInstance.selectRoleWorker(dataBase, workerID);
        res.status(200).json(data);            
    } catch (error) {
        res.status(500).json({error});                    
    }

}
export default listRoleWorker;
