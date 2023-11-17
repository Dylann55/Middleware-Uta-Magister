class DeleteSemester {
  async deleteSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteSemester_SupaBase extends DeleteSemester {
  async deleteSemester(dataBase, semesterIDs) {
    const { error } = await dataBase.from('semester')
      .delete()
      .in('semesterID', semesterIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteSemester_SupaBase as DeleteSemester };
