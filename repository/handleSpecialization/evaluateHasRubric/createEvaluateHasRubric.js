class CreateEvaluateHasRubric {
  async createEvaluateHasRubric() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateEvaluateHasRubric_SupaBase extends CreateEvaluateHasRubric {
  async createEvaluateHasRubric(dataBase, dataArray) {
    const { error } = await dataBase.from('evaluateHasRubric')
      .insert(dataArray);
    if (error) { throw error; }
  }
}

export { CreateEvaluateHasRubric_SupaBase as CreateEvaluateHasRubric };
