class UpdateStorage {
  async updateStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class UpdateStorage_SupaBase extends UpdateStorage {
  async updateStorage(dataBase, bucketLocation, file, uniqueFileName) {
    const fileBuffer = file.buffer;
    const { error } = await dataBase.storage
      .from(bucketLocation)
      .update(uniqueFileName, fileBuffer);
    if (error) {
      throw error;
    }
  }
}

export { UpdateStorage_SupaBase as UpdateStorage };
