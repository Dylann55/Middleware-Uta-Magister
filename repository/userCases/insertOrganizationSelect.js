const insertOrganizationSelect = async (supabase, name) =>{
    const { data, error } = await supabase
    .from('organization')
    .insert([
    { name },
    ])
    .select()
    .maybeSingle();   
    if(error){throw error;} 
    return data;
}
export default insertOrganizationSelect;