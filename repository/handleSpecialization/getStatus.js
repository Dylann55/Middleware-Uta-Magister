class GetStatus {
  async getStatus() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class GetStatus_SupaBase extends GetStatus {
  async getStatus(dataBase) {
    const { data, error } = await dataBase.from('status')
      .select();
    if (error) { throw error; }
    const status = {};
    data.forEach((element) => {
      status[element.name] = element.statusID;
    });
    return status;
  }
}

export { GetStatus_SupaBase as GetStatus };
