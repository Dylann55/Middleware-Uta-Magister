import { AuthUser } from "../../../repository/authCases/authUser.js";

const authUser = new AuthUser();

const signinTest = async (req, res) => {
  const dataBase = req.dataBase;
  const { email, password } = req.body;

  try {
    const session = await authUser.authUser(dataBase, email, password);
    const access_token = session.access_token;
    res.json({ access_token });
  } catch (error) {
    console.error('Credenciales inválidas: ', error.message);
    res.status(401).json({ error: 'Credenciales inválidas', message: error.message });
  }
}

export default signinTest;
