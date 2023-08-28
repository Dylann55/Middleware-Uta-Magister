const currencyTypeChange = async (supabase) => {
    const { data, error } = await supabase.from('currencyType')
    .select();
    const currencyTypeChanges = {};
    data.forEach(currency => {
        currencyTypeChanges[currency.abreviation] = currency.currencyType;
    });
    return currencyTypeChanges;
}
const currencyTypeid = async (supabase) => {
    const { data, error } = await supabase.from('currencyType')
    .select();
    const currencyTypeids = {};
    data.forEach(currency => {
        currencyTypeids[currency.abreviation] = currency.currencyTypeID;
    });
    return currencyTypeids;
}

export  {
    currencyTypeid,
    currencyTypeChange
};