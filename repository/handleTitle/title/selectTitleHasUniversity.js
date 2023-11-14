class SelectTitleHasUniversity {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectTitleHasUniversity_SupaBase extends SelectTitleHasUniversity {
  async selectTitleHasUniversity(dataBase) {
    const { data, error } = await dataBase.from('titleHasUniversity')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectTitleHasUniversity_SupaBase as SelectTitleHasUniversity };
