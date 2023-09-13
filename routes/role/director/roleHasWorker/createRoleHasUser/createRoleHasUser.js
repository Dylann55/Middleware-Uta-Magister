/* eslint-disable import/extensions */
import { CreateRoleHasUser } from '../../../../../repository/director/roleHasUser/createRoleHasUser.js';
import { SearchRoles } from '../../../../../repository/director/roleHasUser/searchRoles.js';
import verifyDuplicateRoles from '../../../../../repository/utils/verifyDuplicateRoles.js';

const createRoleHasUser = async (req, res) => {
  const dataBase = req.dataBase;
  const { userID, roleIDs } = req.body;
  const createRoleHasUserInstance = new CreateRoleHasUser();
  const searchRolesInstance = new SearchRoles();
  try {
    const data = await searchRolesInstance.searchRoles(dataBase, userID);

    const duplicateRolesString = verifyDuplicateRoles(data, roleIDs);

    if (duplicateRolesString) {
      res.status(409).json({ message: `El Usuario ya tiene el rol de ${duplicateRolesString}` });
    } else {
      const createPromises = roleIDs.map(async (roleID) => {
        await createRoleHasUserInstance.createRoleHasUser(dataBase, userID, roleID);
      });

      await Promise.all(createPromises);
      res.status(200).json({ verificationMessage: 'Se creo el Rol exitosamente' });
    }
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ error });
    }
  }
};
export default createRoleHasUser;
