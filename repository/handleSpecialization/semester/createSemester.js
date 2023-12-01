class CreateSemester {
  async createSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateSemester_SupaBase extends CreateSemester {
  async createSemester(dataBase, semesterNumber, year, startDate, finishDate) {
    const { data, error } = await dataBase.from('semester').insert({
      semesterNumber, year, startDate, finishDate,
    })
      .select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateSemester_SupaBase as CreateSemester };
