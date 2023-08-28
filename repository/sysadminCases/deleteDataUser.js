const deleteDataUser = async (supabase, userID) =>{
    const { error} = await supabase.from('user')
    .delete()
    .eq('id', userID);
    if(error){ throw error;}
}
export default deleteDataUser;