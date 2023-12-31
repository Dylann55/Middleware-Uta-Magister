class UpdateSemester {
  async updateSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateSemester_SupaBase extends UpdateSemester {
  async updateSemester(dataBase, semesterID, semesterNumber, year, startDate, finishDate) {
    const { error } = await dataBase.from('semester')
      .update({
        semesterNumber, year, startDate, finishDate,
      })
      .eq('semesterID', semesterID);
    if (error) { throw error; }
  }
}

export { UpdateSemester_SupaBase as UpdateSemester };
