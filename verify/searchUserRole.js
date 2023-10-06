/* eslint-disable import/extensions */
import { GetUserAuth } from '../repository/utils/getUserAuth.js';
import { GetRole } from '../repository/utils/getRole.js';

const searchUserRole = async (dataBase, access_token) => {
  const getUserAuth = new GetUserAuth();
  const getRole = new GetRole();
  const user = await getUserAuth.getUserAuth(dataBase, access_token);
  if (user) {
    const roles = await getRole.getRole(dataBase);
    return { user, roles };
  }
  return { user: null, roles: null };
};

export default searchUserRole;
