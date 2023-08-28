import listUserOrganizationRoles from "../../../../repository/userCases/listUserOrganizationRoles.js";

const listMyParticipation = async (req, res) =>{
    const supabase = req.supabase;
    const { id } = req.body;
    try {
        const data = await listUserOrganizationRoles(supabase, id);
        res.status(200).json(data);            
    } catch (error) {        
        res.status(500).json({error});            
    }

}
export default listMyParticipation;