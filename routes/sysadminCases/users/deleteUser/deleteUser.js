import { DeleteUser } from "../../../../repository/sysadminCases/user/deleteUser.js";

const deleteUser = async (req, res) => {
    const dataBase = req.dataBase;
    const { userIDs } = req.body;
    const deleteUserInstance = new DeleteUser();
    try {
        for (const userID of userIDs) {
            await deleteUserInstance.deleteUser(dataBase, userID);
        }
        res.status(200).json({ verificationMessage: 'Se eliminó exitosamente' });
    } catch (error) {
        res.status(500).json({ error });
    }
}
export default deleteUser;
