class GetFormat {
  async getFormat() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetFormat_SupaBase extends GetFormat {
  async getFormat(dataBase, name) {
    const { data } = await dataBase.from('format')
      .select()
      .eq('name', name)
      .maybeSingle();
    return data;
  }
}

export { GetFormat_SupaBase as GetFormat };
