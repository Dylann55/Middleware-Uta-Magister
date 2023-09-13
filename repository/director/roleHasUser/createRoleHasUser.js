class CreateRoleHasUser {
  async createRoleHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRoleHasUser_SupaBase extends CreateRoleHasUser {
  async createRoleHasUser(dataBase, userID, roleID) {
    const { error } = await dataBase.from('roleHasUser')
      .insert({ userID, roleID });
    if (error) { throw error; }
  }
}

export { CreateRoleHasUser_SupaBase as CreateRoleHasUser };
