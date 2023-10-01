class SelectUser {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUser_SupaBase extends SelectUser {
  async selectUser(dataBase, roleID) {
    const { data, error } = await dataBase.from('roleHasUser')
      .select(`
            userID,
            roleID,
            roleHasUserID,
            user ( rut, firstName, secondName, surnameF, surnameM )
            `)
      .eq('roleID', roleID);

    if (error) { throw error; }
    return data;
  }
}

export { SelectUser_SupaBase as SelectUser };
