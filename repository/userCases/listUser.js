const listUser = async (supabase, id) =>{
    const { data, error } = await supabase
    .from('user')
    .select()
    .eq('id', id)        
    .maybeSingle();
    if(error){ throw error; }
    return data;
}
export default listUser;