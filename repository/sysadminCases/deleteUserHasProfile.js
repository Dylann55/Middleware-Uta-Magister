const deleteUserHasProfile = async (supabase, userHasProfile, profileID) =>{
    const { error } = await supabase.from('userHasProfile')
    .delete()
    .eq('userHasProfile', userHasProfile)
    .neq('profileID', profileID);
    if(error){ throw error; }
}
export default deleteUserHasProfile;