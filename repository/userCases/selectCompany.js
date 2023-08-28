const selectCompany = async (supabase, organizationID, id, profileID) =>{
    const { data, error } = await supabase.from('userHasProfile')
    .select(`organization (organizationID, name)`)
    .eq('organizationID', organizationID)
    .eq('userID', id)
    .eq('profileID', profileID)
    .maybeSingle();   
    if (error) {
      throw error;
    }
    return data;
}
export default selectCompany;