class CreateRoleHasTitle {
  async createRoleHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRoleHasTitle_SupaBase extends CreateRoleHasTitle {
  async createRoleHasTitle(dataBase, userID, formatID, titleID, documentTitle) {
    const { error } = await dataBase.from('roleHasTitle').insert({
      userID, formatID, titleID, documentTitle,
    });
    if (error) { throw error; }
  }
}

export { CreateRoleHasTitle_SupaBase as CreateRoleHasTitle };
