const listUserHasProfileByUserIDOrganizationID = async (supabase, organizationID, userID) =>{
    const { data, error } = await supabase.from('userHasProfile')
    .select(`
    userHasProfile, organizationID, userID, profileID,
    user (email, name, lastName),
    profile (rol)
    `)
    .eq('organizationID', organizationID)
    .eq('userID', userID);
    if(error){throw error; }
    return data;
}
export default listUserHasProfileByUserIDOrganizationID;
