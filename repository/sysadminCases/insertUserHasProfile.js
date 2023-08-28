const insertUserHasProfile = async (supabase, userID, profileID, organizationID) => {
    const { error } = await supabase.from('userHasProfile')
    .insert({ userID, profileID, organizationID});
    if(error) { throw error; }
}
export default insertUserHasProfile;