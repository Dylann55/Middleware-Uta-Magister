class SearchRole {
  async verifyRole() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class VerifyRole_SupaBase extends SearchRole {
  async verifyRole(dataBase, table, id) {
    const { data } = await dataBase.from(table)
      .select()
      .eq('id', id)
      .maybeSingle();
    return data;
  }
}

export { VerifyRole_SupaBase as VerifyRole };
