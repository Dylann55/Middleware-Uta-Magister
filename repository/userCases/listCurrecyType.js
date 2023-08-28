const listCurrencyType = async (supabase) =>{
    const { data, error } = await supabase.from('currencyType')
    .select();
    if(error){ throw error;}
    return data;
}
export default listCurrencyType;