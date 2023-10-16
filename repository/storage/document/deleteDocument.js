class DeleteDocument {
  async deleteDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteDocument_SupaBase extends DeleteDocument {
  async deleteDocument(dataBase, documentIDs) {
    const { error } = await dataBase.from('document')
      .delete()
      .in('documentID', documentIDs);
    if (error) { throw error; }
  }
}

export { DeleteDocument_SupaBase as DeleteDocument };
