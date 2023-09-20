import { v4 as uuidv4 } from 'uuid';

class CreateStorage {
  async createStorage() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class CreateStorage_SupaBase extends CreateStorage {
  async createStorage(dataBase, bucketLocation, file) {
    const originalFileName = file.originalname;
    const fileExtension = originalFileName.split('.').pop();
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const fileBuffer = file.buffer;
    const { error } = await dataBase.storage
      .from(bucketLocation)
      .upload(uniqueFileName, fileBuffer);
    if (error) {
      throw error;
    }

    const data = await dataBase.storage.from(bucketLocation).getPublicUrl(uniqueFileName);
    return data.data.publicUrl;
  }
}

export { CreateStorage_SupaBase as CreateStorage };
