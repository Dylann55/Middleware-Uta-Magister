class SelectSemester {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSemester_SupaBase extends SelectSemester {
  async selectSemester(dataBase) {
    const { data, error } = await dataBase.from('semester')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSemester_SupaBase as SelectSemester };
