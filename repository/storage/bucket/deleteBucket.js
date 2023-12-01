class DeleteBucket {
  async deleteBucket() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class DeleteBucket_SupaBase extends DeleteBucket {
  async deleteBucket(dataBase, bucketLocation, name) {
    const { error } = await dataBase.storage
      .from(bucketLocation)
      .remove([name]);
    if (error) {
      throw error;
    }
  }
}

export { DeleteBucket_SupaBase as DeleteBucket };
