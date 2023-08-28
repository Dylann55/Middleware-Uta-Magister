const selectUserHasProfileData = async (supabase, organizationID) =>{
    const { data ,error} = await supabase.from('userHasProfile')
    .select(`
    userHasProfile, organizationID, userID, profileID,
    user (email, name, lastName),
    profile (rol)
    `)
    .eq('organizationID', organizationID);
    if(error) {throw error;}
    return data;
}
export default selectUserHasProfileData;