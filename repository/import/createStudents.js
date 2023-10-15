class CreateStudents {
  async createStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateStudents_SupaBase extends CreateStudents {
  async createStudents(dataBase, excelData) {
    await dataBase.from('roleHasUser')
      .insert(excelData);
  }
}

export { CreateStudents_SupaBase as CreateStudents };
