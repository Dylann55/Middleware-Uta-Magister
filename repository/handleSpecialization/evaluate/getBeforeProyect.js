class GetBeforeProyect {
  async getBeforeProyect() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetBeforeProyect_SupaBase extends GetBeforeProyect {
  async getBeforeProyect(dataBase, evaluateID, specializationHasUserID) {
    const { data, error } = await dataBase.from('evaluate')
      .select()
      .eq('evaluateID', evaluateID)
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data.beforeProyect;
  }
}

export { GetBeforeProyect_SupaBase as GetBeforeProyect };
