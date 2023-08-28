import { ResetPasswordForEmail } from '../../../repository/authCases/resetPasswordForEmail.js';

const resetPasswordForEmail = new ResetPasswordForEmail();

const recoverPassword = async (req, res) => {
  const dataBase = req.dataBase;
  const { email } = req.body;
  
  try {
    await resetPasswordForEmail.resetPasswordForEmail(dataBase, email, process.env.URL_RESET_PASSWORD);
    res.status(200).json({ verificationMessage: 'Correo de restablecimiento de contraseña enviado' });
  } catch (error) {
    res.status(500).json({ error });
  }      
}

export default recoverPassword;
