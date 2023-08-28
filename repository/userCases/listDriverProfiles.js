const listDriverProfiles = async (supabase, id, profileID) =>{
    const { data ,error} = await supabase.from('userHasProfile')
    .select(`
    userHasProfile, 
    userID,
    profileID,
    organization (name, organizationID)
    `)
    .eq('userID', id)
    .eq('profileID', profileID)
    if(error) {
        throw error;
    }
    return data;
}
export default listDriverProfiles;