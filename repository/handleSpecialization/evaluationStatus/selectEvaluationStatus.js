class SelectEvaluationStatus {
  async selectEvaluationStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluationStatus_SupaBase extends SelectEvaluationStatus {
  async selectEvaluationStatus(dataBase, evaluationStatusIDs) {
    const { data, error } = await dataBase.from('evaluationStatus')
      .select()
      .in('evaluationStatusID', evaluationStatusIDs);
    if (error) {
      throw error;
    }
    return data;
  }
}

export { SelectEvaluationStatus_SupaBase as SelectEvaluationStatus };
