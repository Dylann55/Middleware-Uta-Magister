class SelectRoleHasTitle {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRoleHasTitle_SupaBase extends SelectRoleHasTitle {
  async selectRoleHasTitle(dataBase, userID) {
    const { data, error } = await dataBase.from('roleHasTitle')
      .select(`
      roleHasTitleID,
      documentTitle,
      formatID,
      titleID,
      title (name),
      format (name)
      `)
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectRoleHasTitle_SupaBase as SelectRoleHasTitle };
