class UpdateRoleHasTitle {
  async updateRoleHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateRoleHasTitle_SupaBase extends UpdateRoleHasTitle {
  async updateRoleHasTitle(dataBase, roleHasTitleID, titleID) {
    const { error } = await dataBase.from('roleHasTitle')
      .update({
        titleID,
      })
      .eq('roleHasTitleID', roleHasTitleID);
    if (error) { throw error; }
  }
}

export { UpdateRoleHasTitle_SupaBase as UpdateRoleHasTitle };
