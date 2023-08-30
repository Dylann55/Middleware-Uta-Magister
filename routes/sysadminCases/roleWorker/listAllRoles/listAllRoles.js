import { GetRole } from '../../../../repository/utils/getRole.js';

const getRoleInstance = new GetRole();

const listAllRoles = async (req, res) => {
    const dataBase = req.dataBase;
    try {
        const data = await getRoleInstance.getRole(dataBase);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }

}
export default listAllRoles;
