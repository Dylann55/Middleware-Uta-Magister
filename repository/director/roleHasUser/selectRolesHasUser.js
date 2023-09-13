class SelectRolesHasUser {
  async selectRolesHasUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRolesHasUser_SupaBase extends SelectRolesHasUser {
  async selectRolesHasUser(dataBase) {
    const { data, error } = await dataBase.from('roleshasuser')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectRolesHasUser_SupaBase as SelectRolesHasUser };
