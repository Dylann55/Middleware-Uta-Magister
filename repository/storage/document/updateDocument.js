class UpdateDocument {
  async updateDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateDocument_SupaBase extends UpdateDocument {
  async updateDocument(dataBase, documentID, archive, formatID) {
    const { error } = await dataBase.from('document').insert({
      archive, formatID,
    })
      .eq('documentID', documentID);
    if (error) { throw error; }
  }
}

export { UpdateDocument_SupaBase as UpdateDocument };
