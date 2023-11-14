class SelectTitle {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectTitle_SupaBase extends SelectTitle {
  async selectTitle(dataBase) {
    const { data, error } = await dataBase.from('title')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectTitle_SupaBase as SelectTitle };
