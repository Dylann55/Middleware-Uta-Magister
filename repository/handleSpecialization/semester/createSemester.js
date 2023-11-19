class CreateSemester {
  async createSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSemester_SupaBase extends CreateSemester {
  async createSemester(dataBase, semesterNumber, year, startDate, finishDate) {
    const { error } = await dataBase.from('semester').insert({
      semesterNumber, year, startDate: new Date(startDate), finishDate: new Date(finishDate),
    });
    if (error) { throw error; }
  }
}

export { CreateSemester_SupaBase as CreateSemester };
