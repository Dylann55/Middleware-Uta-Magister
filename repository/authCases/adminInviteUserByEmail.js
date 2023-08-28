const adminInviteUserByEmail = async( supabase, email, redirectTo) =>{
    const {data: {user}, error} = await supabase.auth.admin.inviteUserByEmail(email, {redirectTo});
    if(error){ throw error; }
    return user;
}
export default adminInviteUserByEmail;