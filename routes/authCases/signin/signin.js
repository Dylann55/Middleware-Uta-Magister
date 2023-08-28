import encodeToken from "../../../token/encodeToken/encodeToken.js";
import { AuthUser } from "../../../repository/authCases/authUser.js";

const authUser = new AuthUser();

const signin = async (req, res) => {
  const dataBase = req.dataBase;
  const secret = process.env.SECRET_PASSWORD;
  const { email, password } = req.body;

  try {
    const session = await authUser.authUser(dataBase, email, password);
    res.json({ token: encodeToken({ session }, secret) });
  } catch (error) {
    if (error.status == 400) {
      res.status(400).json({ message: 'Credenciales inválidas' });
    } else {
      res.status(500).json({ error });
    }
  }
}

export default signin;
