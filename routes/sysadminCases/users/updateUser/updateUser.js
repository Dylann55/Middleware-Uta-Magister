import { UpdateUser } from "../../../../repository/sysadminCases/user/updateUser.js";

const updateUserInstance = new UpdateUser();

const updateUser = async (req, res) => {
    const dataBase = req.dataBase;
    const {userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone } = req.body;
    try {
        await updateUserInstance.updateUser(dataBase, userID, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone);
        res.status(200).json({ verificationMessage: 'Se actualizo exitosamente' });
    } catch (error) {
        res.status(500).json({ error });
    }

}
export default updateUser;
