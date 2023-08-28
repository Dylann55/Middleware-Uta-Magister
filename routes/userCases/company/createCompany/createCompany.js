import insertUserHasProfile from '../../../../repository/ManageCases/insertUserHasProfile.js';
import insertOrganizationSelect from '../../../../repository/userCases/insertOrganizationSelect.js';
import selectOrganizationByName from '../../../../repository/ManageCases/selectOrganizationByName.js';
import profile from "../../../../repository/utils/profile.js";

const createCompany = async (req, res) => {
  const supabase = req.supabase;
  const profiles = await profile(supabase);
  const { id, name } = req.body;
  try {
    const organizationData = await selectOrganizationByName(supabase, name);
    if (organizationData) {
      const repeatError = new Error('La empresa ya existe');
      repeatError.status = 409;
      throw repeatError;
    }
    const data = await insertOrganizationSelect(supabase, name);
    if(!data){
      const findError = new Error('No se encontro la empresa');
      findError.status = 409;
      throw findError;
    }
    await insertUserHasProfile(supabase, data.organizationID, id, profiles.Jefe);
    res.status(200).json({message: 'La empresa se creó exitosamente'});

  } catch (error) {
    if(error.status == 409){
      res.status(409).json({message: error.message});
    }else{
      res.status(500).json({error});
    }
  }
};

export default createCompany;
