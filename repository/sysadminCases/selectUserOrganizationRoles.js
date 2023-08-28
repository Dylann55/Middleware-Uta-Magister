const selectUserOrganizationRoles = async (supabase, organizationID) =>{
    const { data, error } = await supabase.from('userorganizationroles')
    .select()
    .eq('organizationID', organizationID);
    if(error){throw error;}
    return data;
}
export default selectUserOrganizationRoles;