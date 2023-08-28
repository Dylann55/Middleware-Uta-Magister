import { GetRole } from "../../../../repository/utils/getRole";

const getRole = new GetRole();

const inviteAttendant = async (req, res) => {
    const dataBase = req.dataBase;
    const { email, password } = req.body;
    const roles = getRole.getRole(dataBase);
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
}
export default inviteAttendant;
