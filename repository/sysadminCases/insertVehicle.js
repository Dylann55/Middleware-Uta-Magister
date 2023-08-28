const insertVehicle = async (supabase, patent, mark, model, maxWeight, organizationID) =>{
    const { error } = await supabase.from('vehicle')
    .insert({patent, mark, model, maxWeight, organizationID});
    if(error){
        throw error;
    }
}
export default insertVehicle;