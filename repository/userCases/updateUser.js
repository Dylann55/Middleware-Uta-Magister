const updateUser = async (supabase, name, lastName, rut, id) =>{
    const { error } = await supabase
    .from('user')
    .update({ name, lastName, rut })
    .eq('id', id);

  if (error) {
    throw error;
  }

}
export default updateUser;