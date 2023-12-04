class CreateEvaluate {
  async createEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateEvaluate_SupaBase extends CreateEvaluate {
  async createEvaluate(dataBase, beforeProyect, formatID, specializationHasUserID, stageID, createdDate) {
    const { error } = await dataBase.from('evaluate').insert({
      beforeProyect, formatID, specializationHasUserID, stageID, createdDate,
    });
    if (error) { throw error; }
  }
}

export { CreateEvaluate_SupaBase as CreateEvaluate };
