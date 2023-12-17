class SelectStatus {
  async selectStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectStatus_SupaBase extends SelectStatus {
  async selectStatus(dataBase, statusIDs) {
    const { data, error } = await dataBase.from('status')
      .select()
      .in('statusID', statusIDs);
    if (error) {
      throw error;
    }
    return data;
  }
}

export { SelectStatus_SupaBase as SelectStatus };
