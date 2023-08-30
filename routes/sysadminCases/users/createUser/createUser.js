import { CreateUser } from '../../../../repository/sysadminCases/user/createUser.js';

const createUserInstance = new CreateUser();

const createUser = async (req, res) => {
    const dataBase = req.dataBase;
    const { rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone } = req.body;
    try {
        const status = await createUserInstance.createUser(dataBase, rut, firstName, secondName, surnameM, surnameF, sex, stateCivil, birthday, address, email, phone)
        if (status != 201) {
            const findError = new Error('No se creo el usuario');
            findError.status = 409;
            throw findError;
        }
        res.status(200).json({ verificationMessage: 'Se ha creado el usuario exitosamente' });
    } catch (error) {
        if (error.status = 409) {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ error });
        }
    }
}
export default createUser;
