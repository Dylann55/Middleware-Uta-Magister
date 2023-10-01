class GetRole {
  async getRole() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetRole_SupaBase extends GetRole {
  async getRole(dataBase, allowedRoles) {
    const { data, error } = await dataBase.from('role')
      .select()
      .in('roleID', allowedRoles);
    if (error) { throw error; }
    return data;
  }
}

export { GetRole_SupaBase as GetRole };
