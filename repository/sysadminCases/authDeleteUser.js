const authDeleteUser = async (supabase, userID) =>{
    const { error } = await supabase.auth.admin.deleteUser(
        userID
    );
}
export default authDeleteUser;