class SelectEvaluationStatus {
  async selectEvaluationStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectEvaluationStatus_SupaBase extends SelectEvaluationStatus {
  async selectEvaluationStatus(dataBase, evaluationStatusIDs) {
    const { error } = await dataBase.from('roleHasTitle')
      .delete()
      .in('evaluationStatusID', evaluationStatusIDs);
    if (error) {
      throw error;
    }
  }
}

export { SelectEvaluationStatus_SupaBase as SelectEvaluationStatus };
