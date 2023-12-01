/* eslint-disable import/extensions */
class CreateBucket {
  async createBucket() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateBucket_SupaBase extends CreateBucket {
  async createBucket(dataBase, bucketLocation, name) {
    const { error } = await dataBase
      .storage
      .from(bucketLocation)
      .createFolder(name);
    if (error) {
      throw error;
    }
  }
}

export { CreateBucket_SupaBase as CreateBucket };
