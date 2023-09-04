class CreateRoleWorker {
  async createRoleWorker() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateRoleWorker_SupaBase extends CreateRoleWorker {
  async createRoleWorker(dataBase, workerID, roleID) {
    const { data, error } = await dataBase.from('roleWorker')
      .insert({ workerID, roleID }).select().maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateRoleWorker_SupaBase as CreateRoleWorker };
