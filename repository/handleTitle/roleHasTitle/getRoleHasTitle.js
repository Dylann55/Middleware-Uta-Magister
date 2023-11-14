class GetRoleHasTitle {
  async getRoleHasTitle() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetRoleHasTitle_SupaBase extends GetRoleHasTitle {
  async getRoleHasTitle(dataBase, roleHasTitleIDs) {
    const { data, error } = await dataBase.from('roleHasTitle')
      .select()
      .in('roleHasTitleID', roleHasTitleIDs);
    if (error) { throw error; }
    return data;
  }
}

export { GetRoleHasTitle_SupaBase as GetRoleHasTitle };
