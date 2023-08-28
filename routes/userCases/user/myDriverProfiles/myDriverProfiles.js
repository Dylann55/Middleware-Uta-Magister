import profile from '../../../../repository/utils/profile.js';
import listDriverProfiles from '../../../../repository/userCases/listDriverProfiles.js';

const myDriverProfiles = async (req, res) =>{
    const supabase = req.supabase;
    const { id } = req.body;
    const profiles = await profile(supabase);
    try {
        const data = await listDriverProfiles(supabase, id, profiles.Chofer);
        res.status(200).json(data);            
    } catch (error) {        
        res.status(500).json({error});            
    }

}
export default myDriverProfiles;