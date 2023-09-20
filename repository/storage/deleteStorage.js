class DeleteStorage {
  async deleteStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteStorage_SupaBase extends DeleteStorage {
  async deleteStorage(dataBase, bucketLocation, uniqueFileName) {
    const { error } = await dataBase.storage
      .from(bucketLocation)
      .remove([uniqueFileName]);
    if (error) {
      throw error;
    }
  }
}

export { DeleteStorage_SupaBase as DeleteStorage };
