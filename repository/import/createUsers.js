class CreateUsers {
  async createStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateUsers_SupaBase extends CreateUsers {
  async createUsers(dataBase, excelData) {
    const { data, error } = await dataBase.from('user')
      .insert(excelData)
      .select('userID');
    if (error) {
      throw error;
    }
    return data;
  }
}

export { CreateUsers_SupaBase as CreateUsers };
