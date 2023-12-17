class CreateRubric {
  async createRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRubric_SupaBase extends CreateRubric {
  async createRubric(dataBase, description, rubricName, comment, evaluateHasUserID, evaluateID) {
    const { error } = await dataBase.from('rubric').insert({
      description, rubricName, comment, evaluateHasUserID, evaluateID,
    });
    if (error) { throw error; }
  }
}

export { CreateRubric_SupaBase as CreateRubric };
