class UpdateQuestion {
  async updateQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateQuestion_SupaBase extends UpdateQuestion {
  async updateQuestion(dataBase, questionID, roleHasUserID, question) {
    const { error } = await dataBase.from('question')
      .update({
        question,
      })
      .eq('roleHasUserID', roleHasUserID)
      .eq('questionID', questionID);
    if (error) { throw error; }
  }
}

export { UpdateQuestion_SupaBase as UpdateQuestion };
