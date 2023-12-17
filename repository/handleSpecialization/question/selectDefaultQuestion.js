class SelectDefaultQuestion {
  async selectDefaultQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectDefaultQuestion_SupaBase extends SelectDefaultQuestion {
  async selectDefaultQuestion(dataBase) {
    const { data, error } = await dataBase.from('question')
      .select()
      .is('userID', null);
    if (error) { throw error; }
    return data;
  }
}

export { SelectDefaultQuestion_SupaBase as SelectDefaultQuestion };
