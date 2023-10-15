/* eslint-disable import/extensions */
import { GetUserAuth } from '../repository/utils/getUserAuth.js';

const searchUserRole = async (dataBase, access_token) => {
  const getUserAuth = new GetUserAuth();
  const user = await getUserAuth.getUserAuth(dataBase, access_token);
  if (user) {
    return { user };
  }
  return { user: null };
};

export default searchUserRole;
