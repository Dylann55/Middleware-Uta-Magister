import profile from '../../../../repository/utils/profile.js';
import selectCompany from '../../../../repository/userCases/selectCompany.js';

const aCompany = async (req, res) => {
  const supabase = req.supabase;
  const { id } = req.body;
  const { organizationID } = req.params;
  const profiles = await profile(supabase);

  try {
    const data = await selectCompany(supabase, organizationID, id, profiles.Jefe);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default aCompany;