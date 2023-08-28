import { SelectUser } from '../../../../repository/sysadminCases/user/selectUser.js';

const selectUser = new SelectUser();

const listUser = async (req, res) =>{
    const dataBase = req.dataBase;  
    try {
        const data = await selectUser.selectUser(dataBase);
        res.status(200).json(data);            
    } catch (error) {        
        res.status(500).json({error});            
    }
}
export default listUser;
