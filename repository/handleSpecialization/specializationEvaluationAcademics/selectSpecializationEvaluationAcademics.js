class SelectSpecializationEvaluationAcademics {
  async selectSpecializationEvaluationAcademics() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectSpecializationEvaluationAcademics_SupaBase extends SelectSpecializationEvaluationAcademics {
  async selectSpecializationEvaluationAcademics(dataBase, table) {
    const { data, error } = await dataBase.from(table)
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectSpecializationEvaluationAcademics_SupaBase as SelectSpecializationEvaluationAcademics };
