import { GetUserAuth } from '../../repository/utils/getUserAuth.js'
import { GetUser } from '../../repository/utils/getUser.js'
import { GetRole } from '../../repository/utils/getRole.js';

const searchUserRole = async (dataBase, access_token) => {
    const getUserAuth = new GetUserAuth();
    const getUser = new GetUser();
    const getRole = new GetRole();
    const user = await getUserAuth.getUserAuth(dataBase, access_token);
    if (user) {
        const worker = await getUser.getUser(dataBase, user.id);
        const roles = await getRole.getRole(dataBase);
        return { worker, roles };
    }
    else {
        return { worker: null, roles: null };
    }
}

export default searchUserRole;