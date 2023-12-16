class UpdateEvaluationStatus {
  async updateEvaluationStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateEvaluationStatus_SupaBase extends UpdateEvaluationStatus {
  async updateEvaluationStatus(dataBase, specializationHasSemesterID, evaluationStatusID) {
    const { error } = await dataBase.from('specializationHasSemester')
      .update({
        evaluationStatusID,
      })
      .eq('specializationHasSemesterID', specializationHasSemesterID);
    if (error) { throw error; }
  }
}

export { UpdateEvaluationStatus_SupaBase as UpdateEvaluationStatus };
