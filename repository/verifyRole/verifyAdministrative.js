class SearchRole {
  async verifyAdministrative() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyAdministrative_SupaBase extends SearchRole {
  async verifyAdministrative(dataBase, roleID, id) {
    const { data } = await dataBase.from('administrative')
      .select()
      .eq('roleID', roleID)
      .eq('id', id)
      .maybeSingle();
    return data;
  }
}

export { VerifyAdministrative_SupaBase as VerifyAdministrative };
