class GetDocument {
  async getDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetDocument_SupaBase extends GetDocument {
  async getDocument(dataBase, documentID, roleHasUserID) {
    const { data, error } = await dataBase.from('document')
      .select()
      .eq('documentID', documentID)
      .eq('roleHasUserID', roleHasUserID)
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { GetDocument_SupaBase as GetDocument };
