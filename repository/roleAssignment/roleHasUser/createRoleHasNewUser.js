class CreateRoleHasNewUser {
  async createRoleHasNewUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRoleHasNewUser_SupaBase extends CreateRoleHasNewUser {
  async createRoleHasNewUser(dataBase, userID, roleID) {
    const { error } = await dataBase.from('roleHasUser')
      .insert({ userID, roleID });
    if (error) { throw error; }
  }
}

export { CreateRoleHasNewUser_SupaBase as CreateRoleHasNewUser };
