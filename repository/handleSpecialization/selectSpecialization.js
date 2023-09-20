class SelectSpecialization {
  async selectSpecialization() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecialization_SupaBase extends SelectSpecialization {
  async selectSpecialization(dataBase) {
    const { data, error } = await dataBase.from('specialization')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecialization_SupaBase as SelectSpecialization };
