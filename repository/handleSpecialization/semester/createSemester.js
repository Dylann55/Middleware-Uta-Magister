class CreateSemester {
  async createSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSemester_SupaBase extends CreateSemester {
  async createSemester(dataBase, startDate, finishDate) {
    const { error } = await dataBase.from('semester').insert({
      startDate, finishDate,
    });
    if (error) { throw error; }
  }
}

export { CreateSemester_SupaBase as CreateSemester };
