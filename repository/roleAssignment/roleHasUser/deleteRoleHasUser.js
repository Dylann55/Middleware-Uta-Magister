class DeleteRoleHasUser {
  async deleteRoleHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteRoleHasUser_SupaBase extends DeleteRoleHasUser {
  async deleteRoleHasUser(dataBase, userID, roleID) {
    const { error } = await dataBase.from('roleHasUser')
      .delete()
      .eq('userID', userID)
      .eq('roleID', roleID);
    if (error) { throw error; }
  }
}

export { DeleteRoleHasUser_SupaBase as DeleteRoleHasUser };
