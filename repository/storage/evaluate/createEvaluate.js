class CreateEvaluate {
  async createEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateEvaluate_SupaBase extends CreateEvaluate {
  async createEvaluate(dataBase, beforeProyect, formatID, specializationHasUserID) {
    const { data, error } = await dataBase.from('evaluate').insert({
      beforeProyect, formatID, specializationHasUserID,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateEvaluate_SupaBase as CreateEvaluate };
