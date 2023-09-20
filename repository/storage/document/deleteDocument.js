class DeleteDocument {
  async deleteDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteDocument_SupaBase extends DeleteDocument {
  async deleteDocument(dataBase, documentID) {
    const { error } = await dataBase.from('document')
      .delete()
      .eq('documentID', documentID);
    if (error) { throw error; }
  }
}

export { DeleteDocument_SupaBase as DeleteDocument };
