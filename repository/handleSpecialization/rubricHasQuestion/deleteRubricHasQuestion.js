class DeleteRubricHasQuestion {
  async deleteRubricHasQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteRubricHasQuestion_SupaBase extends DeleteRubricHasQuestion {
  async deleteRubricHasQuestion(dataBase, rubricHasQuestionIDs, rubricID) {
    const { error } = await dataBase.from('rubricHasQuestion')
      .delete()
      .eq('rubricID', rubricID)
      .in('rubricHasQuestionID', rubricHasQuestionIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteRubricHasQuestion_SupaBase as DeleteRubricHasQuestion };
