class UpdateQuestion {
  async updateQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateQuestion_SupaBase extends UpdateQuestion {
  async updateQuestion(dataBase, questionID, userID, question) {
    const { error } = await dataBase.from('question')
      .update({
        question,
      })
      .eq('userID', userID)
      .eq('questionID', questionID);
    if (error) { throw error; }
  }
}

export { UpdateQuestion_SupaBase as UpdateQuestion };
