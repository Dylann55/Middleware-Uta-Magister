class CreateWorker {
  async createWorker() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateWorker_SupaBase extends CreateWorker {
  async createWorker(dataBase, id, email) {
    const { data, error } = await dataBase.from('worker').insert({ userID: id, email })
      .select()
      .maybeSingle();
    if (error) { throw error; }
    return data;
  }
}

export { CreateWorker_SupaBase as CreateWorker };
