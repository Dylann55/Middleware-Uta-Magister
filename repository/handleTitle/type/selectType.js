class SelectType {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectType_SupaBase extends SelectType {
  async selectType(dataBase) {
    const { data, error } = await dataBase.from('type')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectType_SupaBase as SelectType };
