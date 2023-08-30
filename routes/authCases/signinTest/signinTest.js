import { AuthUser } from "../../../repository/authCases/authUser.js";

const authUser = new AuthUser();

const signinTest = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;

  try {
    const session = await authUser.authUser(dataBase, email, password);
    res.json({ session });
  } catch (error) {
    console.error('Credenciales inválidas: ', error.message);
    res.status(401).json({ error: 'Credenciales inválidas', message: error.message });
  }
}

export default signinTest;
