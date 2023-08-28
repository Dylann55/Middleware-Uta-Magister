import listMyProfilesCompany from "../../../../repository/userCases/listMyProfilesCompany.js";

const listMyParticipationCompany = async (req, res) =>{
    const supabase = req.supabase;
    const { id } = req.body;
    const { organizationID } = req.params;
    try {
        const data = await listMyProfilesCompany(supabase, id, organizationID);
        res.status(200).json(data);            
    } catch (error) {        
        res.status(500).json({error});
    }

}
export default listMyParticipationCompany;
