const listMyProfilesCompany = async (supabase, id, organizationID) =>{
    const { data ,error} = await supabase.from('userHasProfile')
    .select(`
    userHasProfile,
    user (id, email, name, lastName),
    profile (rol)
    `)
    .eq('userID', id)
    .eq('organizationID', organizationID);
    if(error){
        throw error;
    }
    return data;
}
export default listMyProfilesCompany;