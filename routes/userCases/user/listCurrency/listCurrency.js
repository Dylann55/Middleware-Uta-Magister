import listCurrencyType from "../../../../repository/userCases/listCurrecyType.js";

const listCurrency = async (req, res) =>{
    const supabase = req.supabase;
    try {
        const data = await listCurrencyType(supabase);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
}
export default listCurrency;