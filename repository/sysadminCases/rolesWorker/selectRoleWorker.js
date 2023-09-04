class SelectRoleWorker {
  async selectRoleWorker() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SelectRoleWorker_SupaBase extends SelectRoleWorker {
  async selectRoleWorker(dataBase, workerID) {
    const { data, error } = await dataBase.from('roleWorker')
      .select(`
            workerID,
            roleID,
            role (name)
            `)
      .eq('workerID', workerID);

    if (error) { throw error; }
    return data;
  }
}

export { SelectRoleWorker_SupaBase as SelectRoleWorker };
