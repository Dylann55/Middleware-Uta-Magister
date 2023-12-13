class SelectQuestion {
  async selectQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectQuestion_SupaBase extends SelectQuestion {
  async selectQuestion(dataBase, userID) {
    const { data, error } = await dataBase.from('question')
      .select()
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectQuestion_SupaBase as SelectQuestion };
