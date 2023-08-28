const deleteVehicle = async (supabase, vehicleID) =>{
    const { error} = await supabase.from('vehicle')
    .delete()
    .eq('vehicleID', vehicleID);
    if(error){ throw error; }
}
export default deleteVehicle;