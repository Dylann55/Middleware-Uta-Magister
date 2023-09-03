import { CreateRoleWorker } from "../../../../repository/sysadminCases/rolesWorker/createRoleWorker.js";
import { SearchRole } from "../../../../repository/utils/searchRole.js";

const createRoleWorker = async (req, res) => {
    const dataBase = req.dataBase;
    const { workerID, roleID } = req.body;
    const createRoleWorkerInstance = new CreateRoleWorker();
    const searchRoleInstance = new SearchRole();
    try {
        const data = await searchRoleInstance.searchRole(dataBase, roleID, workerID);
        if (data) {
            res.status(409).json({ message: 'El Usuario ya tiene ese Rol' });
        } else {
            const roleWorker = await createRoleWorkerInstance.createRoleWorker(dataBase, workerID, roleID);
            if (roleWorker) {
                res.status(200).json({ verificationMessage: 'Se creo el Rol exitosamente' });
            }
            else {
                res.status(409).json({ message: 'Error al Crear el Rol al Usuario' });
            }
        }
    } catch (error) {
        if (error.status = 409) {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ error });
        }
    }
}
export default createRoleWorker;
