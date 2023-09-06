/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import env from 'dotenv';

env.config();

class DataBase {
  constructor() {
    // Implementación predeterminada
  }

  async connect() {
    throw new Error('Sobreescribir para obtener la instancia de la Base de datos');
  }
}

class SupaBase extends DataBase {
  constructor() {
    super();

    // Datos de conexión a la primera base de datos
    this.dataBaseUrl = process.env.DATABASE_URL;
    this.dataKey = process.env.DATABASE_SERVICE_ROLE_KEY;

    // Datos de conexión a la segunda base de datos
    this.dataBaseUrlBackup = process.env.DATABASE_URL_BACKUP || '';
    this.dataKeyBackup = process.env.DATABASE_SERVICE_ROLE_KEY_BACKUP || '';
  }

  async connect() {
    console.log("xd")

    return null;
  }
}

export { SupaBase as DataBase };
