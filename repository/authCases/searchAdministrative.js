class SearchAdministrative {
  async searchAdministrative() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SeachAdministrative_SupaBase extends SearchAdministrative {
  async searchAdministrative(dataBase, userID) {
    const allowedRolesString = process.env.ALLOWED_ROLES_DIRECTOR;
    const allowedRoles = allowedRolesString.split(',').map(Number);
    const { data } = await dataBase.from('roleHasUser')
      .select()
      .in('roleID', allowedRoles)
      .eq('userID', userID);
    return data;
  }
}

export { SeachAdministrative_SupaBase as SearchAdministrative };
