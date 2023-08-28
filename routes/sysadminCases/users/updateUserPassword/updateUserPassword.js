import authUpdateUserByID from "../../../../repository/sysadminCases/authUpdateUserByID.js";

const updateUserPassword = async(req, res) =>{
    const supabase = req.supabase;
    const { userID, password } = req.body;
    try {
        await authUpdateUserByID(supabase, userID, password);
        res.status(200).json({message: 'La contraseña se actualizó exitosamente'});
    } catch (error) {
        res.status(500).json({error});
    }
    
}
export default updateUserPassword;
