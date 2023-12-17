class DeleteDocuments {
  async deleteDocuments() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteDocuments_SupaBase extends DeleteDocuments {
  async deleteDocuments(dataBase, documentID) {
    const { error } = await dataBase.from('document')
      .delete()
      .eq('documentID', documentID);
    if (error) { throw error; }
  }
}

export { DeleteDocuments_SupaBase as DeleteDocuments };
