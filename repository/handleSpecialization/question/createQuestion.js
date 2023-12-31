class CreateQuestion {
  async createQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateQuestion_SupaBase extends CreateQuestion {
  async createQuestion(dataBase, question, userID) {
    const { error } = await dataBase.from('question').insert({
      question, userID,
    });
    if (error) { throw error; }
  }
}

export { CreateQuestion_SupaBase as CreateQuestion };
