class SelectUserSpecializationEvaluationAcademics {
  async selectSpecializationEvaluationAcademics() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectUserSpecializationEvaluationAcademics_SupaBase extends SelectUserSpecializationEvaluationAcademics {
  async selectSpecializationEvaluationAcademics(dataBase, table, userID, specializationHasUserID) {
    const { data, error } = await dataBase.from(table)
      .select()
      .eq('userID', userID)
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectUserSpecializationEvaluationAcademics_SupaBase as SelectUserSpecializationEvaluationAcademics };
