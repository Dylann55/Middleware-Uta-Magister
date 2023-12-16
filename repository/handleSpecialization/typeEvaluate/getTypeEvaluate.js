class GetTypeEvaluate {
  async getTypeEvaluate() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetTypeEvaluate_SupaBase extends GetTypeEvaluate {
  async getTypeEvaluate(dataBase, typeEvaluateID) {
    const { data, error } = await dataBase.from('typeEvaluate')
      .select()
      .eq('typeEvaluateID', typeEvaluateID);
    if (error) { throw error; }
    return data;
  }
}

export { GetTypeEvaluate_SupaBase as GetTypeEvaluate };
