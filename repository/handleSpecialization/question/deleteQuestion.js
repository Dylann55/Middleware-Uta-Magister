class DeleteQuestion {
  async deleteQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteQuestion_SupaBase extends DeleteQuestion {
  async deleteQuestion(dataBase, questionIDs, userID) {
    const { error } = await dataBase.from('question')
      .delete()
      .eq('userID', userID)
      .in('questionID', questionIDs);
    if (error) {
      throw error;
    }
  }
}

export { DeleteQuestion_SupaBase as DeleteQuestion };
