class SelectSpecializationHasAcademic {
  async selectSpecializationHasAcademic() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecializationHasAcademic_SupaBase extends SelectSpecializationHasAcademic {
  async selectSpecializationHasAcademic(dataBase, specializationHasSemesterID) {
    const { data, error } = await dataBase.from('specializationEvaluationAcademics')
      .select()
      .eq('specializationHasSemesterID', specializationHasSemesterID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecializationHasAcademic_SupaBase as SelectSpecializationHasAcademic };
