class CreateRubricHasQuestion {
  async createRubricHasQuestion() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRubricHasQuestion_SupaBase extends CreateRubricHasQuestion {
  async createRubricHasQuestion(dataBase, dataArray) {
    const { error } = await dataBase.from('rubricHasQuestion')
      .insert(dataArray);
    if (error) { throw error; }
  }
}

export { CreateRubricHasQuestion_SupaBase as CreateRubricHasQuestion };
