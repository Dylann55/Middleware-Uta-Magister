import listUserHasProfileCompanies from '../../../../repository/userCases/listUserHasProfileCompanies.js';

const listMyCompanies = async (req, res) => {
  const supabase = req.supabase;
  const { id } = req.body;
  try {
    const data = await listUserHasProfileCompanies(supabase, `organization (organizationID, name)`, id);
    res.status(200).json({id, data});
  } catch (error) {
    res.status(500).json({error});
  }
};

export default listMyCompanies;
