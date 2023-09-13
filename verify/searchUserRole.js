/* eslint-disable import/extensions */
import { GetUserAuth } from '../repository/utils/getUserAuth.js';
import { GetUser } from '../repository/utils/getUser.js';
import { GetRole } from '../repository/utils/getRole.js';

const searchUserRole = async (dataBase, access_token) => {
  const getUserAuth = new GetUserAuth();
  const getUser = new GetUser();
  const getRole = new GetRole();
  const userAuth = await getUserAuth.getUserAuth(dataBase, access_token);
  if (userAuth) {
    const user = await getUser.getUser(dataBase, userAuth.id);
    const roles = await getRole.getRole(dataBase);
    return { user, roles };
  }

  return { user: null, roles: null };
};

export default searchUserRole;
