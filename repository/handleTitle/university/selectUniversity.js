class SelectUniversity {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUniversity_SupaBase extends SelectUniversity {
  async selectUniversity(dataBase) {
    const { data, error } = await dataBase.from('university')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectUniversity_SupaBase as SelectUniversity };
