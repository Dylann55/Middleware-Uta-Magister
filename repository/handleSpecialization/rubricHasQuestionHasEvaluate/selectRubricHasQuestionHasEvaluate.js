class SelectRubricHasQuestionHasEvaluate {
  async selectRubricHasQuestionHasEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRubricHasQuestionHasEvaluate_SupaBase extends SelectRubricHasQuestionHasEvaluate {
  async selectRubricHasQuestionHasEvaluate(dataBase, evaluateHasUserID, evaluateID) {
    const { data, error } = await dataBase.from('rubricHasQuestionHasEvaluate')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('evaluateHasUserID', evaluateHasUserID);
    if (error) {
      throw error;
    }
    return data;
  }
}

export { SelectRubricHasQuestionHasEvaluate_SupaBase as SelectRubricHasQuestionHasEvaluate };
