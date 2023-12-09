class UpdateRubricHasQuestion {
  async updateRubricHasQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateRubricHasQuestion_SupaBase extends UpdateRubricHasQuestion {
  async updateRubricHasQuestion(dataBase, rubricID, rubricHasQuestionID, dataArray) {
    const { error } = await dataBase.from('rubricHasQuestion')
      .update(dataArray)
      .eq('rubricID', rubricID)
      .eq('rubricHasQuestionID', rubricHasQuestionID);
    if (error) { throw error; }
  }
}

export { UpdateRubricHasQuestion_SupaBase as UpdateRubricHasQuestion };
