class DeleteRoleHasTitle {
  async deleteRoleHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteRoleHasTitle_SupaBase extends DeleteRoleHasTitle {
  async deleteRoleHasTitle(dataBase, roleHasTitleIDs) {
    const { error } = await dataBase.from('roleHasTitle')
      .delete()
      .in('roleHasTitleID', roleHasTitleIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteRoleHasTitle_SupaBase as DeleteRoleHasTitle };
