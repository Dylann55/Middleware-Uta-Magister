class UpdateDocument {
  async updateDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateDocument_SupaBase extends UpdateDocument {
  async updateDocument(dataBase, documentID, archive, formatID, category) {
    const { error } = await dataBase.from('document').update({
      archive, formatID, category,
    })
      .eq('documentID', documentID);
    if (error) { throw error; }
  }
}

export { UpdateDocument_SupaBase as UpdateDocument };
