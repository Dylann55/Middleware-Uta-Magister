class GetSemester {
  async getSemester() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetSemester_SupaBase extends GetSemester {
  async getSemester(dataBase, semesterID) {
    const { data, error } = await dataBase.from('semester')
      .select('semesterID', semesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { GetSemester_SupaBase as GetSemester };
