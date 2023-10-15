class UpsertData {
  async createStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpsertData_SupaBase extends UpsertData {
  async upsertData(dataBase, table, options, excelData) {
    const { error } = await dataBase.from(table)
      .upsert(excelData, { onConflict: options });
    if (error) {
      throw error;
    }
  }
}

export { UpsertData_SupaBase as UpsertData };
