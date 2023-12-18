class SelectSpecializationHasStudent {
  async selectSpecializationHasStudent() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecializationHasStudent_SupaBase extends SelectSpecializationHasStudent {
  async selectSpecializationHasStudent(dataBase, table, userID, specializationHasUserID, specializationHasSemesterID) {
    const { data, error } = await dataBase.from(table)
      .select()
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID)
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecializationHasStudent_SupaBase as SelectSpecializationHasStudent };
