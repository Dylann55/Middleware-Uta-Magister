class SelectDocument {
  async selectDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectDocument_SupaBase extends SelectDocument {
  async selectDocument(dataBase, userID) {
    const { data, error } = await dataBase.from('document')
      .select(`
        documentID,
        category,
        archive,
        userID,
        formatID,
        format (name)
        `)
      .eq('userID', userID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectDocument_SupaBase as SelectDocument };
