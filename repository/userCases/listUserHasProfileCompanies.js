import profile from '../utils/profile.js';

const listUserHasProfileCompanies = async (supabase, selection, id) =>{
    const profiles = await profile(supabase);
    const { data, error } = await supabase.from('userHasProfile')
    .select(selection)
    .eq('userID', id)
    .eq('profileID', profiles.Jefe);
    if(error){ throw error; }
    return data;
}
export default listUserHasProfileCompanies;