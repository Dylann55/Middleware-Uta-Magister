const authUpdateUserByID = async (supabase, userID, password) =>{
    const { error } = await supabase.auth.admin.updateUserById(
        userID,
        { password }
    )           
    if(error){ throw error; }

}
export default authUpdateUserByID;