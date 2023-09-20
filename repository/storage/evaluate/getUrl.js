class GetUrl {
  async getUrl() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetUrl_SupaBase extends GetUrl {
  async getUrl(dataBase, specializationHasUserID) {
    const { data, error } = await dataBase.from('evaluate')
      .select()
      .eq('specializationHasUserID', specializationHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data.beforeProyect;
  }
}

export { GetUrl_SupaBase as GetUrl };
