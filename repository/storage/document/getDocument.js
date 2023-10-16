class GetDocument {
  async getDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetDocument_SupaBase extends GetDocument {
  async getDocument(dataBase, documentIDs) {
    const { data, error } = await dataBase.from('document')
      .select()
      .in('documentID', documentIDs);
    if (error) { throw error; }
    return data;
  }
}

export { GetDocument_SupaBase as GetDocument };
