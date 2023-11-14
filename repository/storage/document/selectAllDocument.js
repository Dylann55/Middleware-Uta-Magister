class SelectAllDocument {
  async selectAllDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectAllDocument_SupaBase extends SelectAllDocument {
  async selectAllDocument(dataBase) {
    const { data, error } = await dataBase.from('document')
      .select(`
        documentID,
        category,
        archive,
        roleHasUserID,
        formatID,
        format (name)
        `);
    if (error) { throw error; }
    return data;
  }
}

export { SelectAllDocument_SupaBase as SelectAllDocument };
