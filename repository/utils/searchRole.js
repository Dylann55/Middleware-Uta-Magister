class SearchRole {
  async searchRole() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SeachRole_SupaBase extends SearchRole {
  async searchRole(dataBase, role, userID) {
    const { data } = await dataBase.from('roleHasUser')
      .select()
      .eq('roleID', role)
      .eq('userID', userID)
      .maybeSingle();
    return data;
  }
}

export { SeachRole_SupaBase as SearchRole };
