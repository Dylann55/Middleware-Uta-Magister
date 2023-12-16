class SelectEvaluationRubric {
  async selectEvaluationRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluationRubric_SupaBase extends SelectEvaluationRubric {
  async selectEvaluationRubric(dataBase, evaluateHasUserID, evaluateID) {
    const { data, error } = await dataBase.from('evaluationRubric')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('evaluateHasUserID', evaluateHasUserID);
    if (error) {
      throw error;
    }
    return data;
  }
}

export { SelectEvaluationRubric_SupaBase as SelectEvaluationRubric };
