class SelectTypeEvaluate {
  async selectUser() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectTypeEvaluate_SupaBase extends SelectTypeEvaluate {
  async selectTypeEvaluate(dataBase) {
    const { data, error } = await dataBase.from('typeEvaluate')
      .select();
    if (error) { throw error; }
    return data;
  }
}

export { SelectTypeEvaluate_SupaBase as SelectTypeEvaluate };
