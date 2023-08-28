const getAuthUser = async (supabase, access_token) =>{
    const {data : {user}} =await supabase.auth.getUser(access_token);
    return user;
}
export default getAuthUser;