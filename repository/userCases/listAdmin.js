const listAdmin = async (supabase, profileID, userID) =>{

    const {data, error} = await supabase.from('userHasProfile')
    .select()
    .eq('profileID', profileID)
    .eq('userID', userID)
    .maybeSingle();
    if(error){throw error;}
    return data;
}
export default listAdmin;