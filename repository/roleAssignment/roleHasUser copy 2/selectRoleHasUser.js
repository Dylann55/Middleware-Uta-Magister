class SelectRoleHasUser {
  async selectRoleHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRoleHasUser_SupaBase extends SelectRoleHasUser {
  async selectRoleHasUser(dataBase, userID, allowedRoles) {
    const { data, error } = await dataBase.from('roleHasUser')
      .select(`
            userID,
            roleID,
            role (name)
            `)
      .eq('userID', userID)
      .in('roleID', allowedRoles);

    if (error) { throw error; }
    return data;
  }
}

export { SelectRoleHasUser_SupaBase as SelectRoleHasUser };
