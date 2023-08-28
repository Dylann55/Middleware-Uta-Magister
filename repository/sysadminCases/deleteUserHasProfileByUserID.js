const deleteUserHasProfileByUserID = async (supabase, userID, organizationID) =>{
    const { error } = await supabase.from('userHasProfile')
    .delete()
    .eq('userID', userID)
    .eq('organizationID', organizationID);
    if(error){throw error;}
}
export default deleteUserHasProfileByUserID;