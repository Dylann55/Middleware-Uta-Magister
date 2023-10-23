class SearchAdministrative {
  async searchAdministrative() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SeachAdministrative_SupaBase extends SearchAdministrative {
  async searchAdministrative(dataBase, id) {
    const { data } = await dataBase.from('administrative')
      .select()
      .eq('id', id);
    return data;
  }
}

export { SeachAdministrative_SupaBase as SearchAdministrative };
