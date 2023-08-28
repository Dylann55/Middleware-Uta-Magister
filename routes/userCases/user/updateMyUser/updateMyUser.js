import updateUser from "../../../../repository/userCases/updateUser.js";

const updateMyUser = async (req, res) => {
    const supabase = req.supabase;
    const { id, name, lastName, rut } = req.body;
    try {
        await updateUser(supabase, name, lastName, rut, id);
        res.status(200).json({ message: 'Datos de usuario se han actualizado con éxito' });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  
  export default updateMyUser;
  