class SelectDocument {
  async selectDocument() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectDocument_SupaBase extends SelectDocument {
  async selectDocument(dataBase, roleHasUserID) {
    const { data, error } = await dataBase.from('document')
      .select(`
        documentID,
        archive,
        roleHasUserID,
        formatID,
        format (name)
        `)
      .eq('roleHasUserID', roleHasUserID);
    if (error) { throw error; }
    return data;
  }
}

export { SelectDocument_SupaBase as SelectDocument };
