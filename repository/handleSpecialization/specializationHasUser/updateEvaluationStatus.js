class UpdateEvaluationStatus {
  async updateEvaluationStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluationStatus_SupaBase extends UpdateEvaluationStatus {
  async updateEvaluationStatus(dataBase, specializationHasUserID, evaluationStatusID) {
    const { error } = await dataBase.from('specializationHasUser')
      .update({
        evaluationStatusID,
      })
      .eq('specializationHasUserID', specializationHasUserID);
    if (error) { throw error; }
  }
}

export { UpdateEvaluationStatus_SupaBase as UpdateEvaluationStatus };
