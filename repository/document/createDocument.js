class CreateDocument {
  async createDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateDocument_SupaBase extends CreateDocument {
  async createDocument(dataBase, archive, userID, formatID, category) {
    const { error } = await dataBase.from('document').insert({
      archive, userID, formatID, category,
    }).select()
      .maybeSingle();
    if (error) { throw error; }
  }
}

export { CreateDocument_SupaBase as CreateDocument };
