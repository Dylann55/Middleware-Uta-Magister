import profile from "../../../../repository/utils/profile.js";
import getAuthUser from "../../../../repository/userCases/getAuthUser.js";
import listAdmin from "../../../../repository/userCases/listAdmin.js";

const checkAdmin = async (req, res) => {
  const supabase = req.supabase;
  const { access_token } = req.body;
  const profiles = await profile(supabase);
  try {
    const user = await getAuthUser(supabase, access_token);
    if (!user) {
      throw new Error('No se encontró el usuario');
    }
    const data = await listAdmin(supabase, profiles.Administrador, user.id);
    if (!data) {
      throw new Error('No se encontró el perfil de administrador');
    }
    res.status(200).json({ administrador: true });
  } catch (error) {
    res.status(400).json({ administrador: false });
  }
};

export default checkAdmin;
