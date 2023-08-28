const listUserOrganizationRoles = async (supabase, id) =>{
    const { data ,error} = await supabase.from('userorganizationroles')
    .select()
    .eq('userID', id);
    if(error){ throw error; }
    return data;
}
export default listUserOrganizationRoles;