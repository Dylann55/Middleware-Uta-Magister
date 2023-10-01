class SearchRoles {
  async searchRoles() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SeachRoles_SupaBase extends SearchRoles {
  async searchRoles(dataBase, userID) {
    const { data } = await dataBase.from('roleHasUser')
      .select(`
          userID,
          roleID,
          role (name)
            `)
      .eq('userID', userID);
    return data;
  }
}

export { SeachRoles_SupaBase as SearchRoles };
