import listUser from "../../../../repository/userCases/listUser.js";

const MyUserData = async (req, res) => {
  const supabase = req.supabase;
  const { id } = req.body;

  try {
    const data = await listUser(supabase, id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default MyUserData;
